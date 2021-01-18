
function getRandomValue(max, min) {
    return attackValue = Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({

    // OPTIONS API = data, methods, computed, watch 
    // thing that hold values
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },

    // actions 
    methods: {

        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];

        },

        attackMonster(){
            this.currentRound ++; 
            // want a value of attack to be between 5 and 12 points 
            const attackValue =  getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            //adds to the addLogMessage
            this.addLogMessage('player', 'attack', attackValue);
            //attacks player back
            this.attackPlayer();
        },

        attackPlayer(){
            // want a value of attack to be between 5 and 12 points 
            const attackValue = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
             //adds to the addLogMessage
            this.addLogMessage('monster', 'attack', attackValue);
        },

        specialAttackMonster(){
            this.currentRound ++; 
            //major damage possible
            const attackValue = getRandomValue(10, 25)
                this.monsterHealth -= attackValue;

                //adds to the addLogMessage
                this.addLogMessage('player', 'special-attack', attackValue);
                //attacks player back
                this.attackPlayer();
        },

        mayUseSpecialAttack(){
            //only available on every 3rd round
            return this.currentRound % 3 !==0;
        },

        healPlayer(){
            this.currentRound ++; 
            const healValue = getRandomValue(8, 20);

            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            //adds to the addLogMessage
            this.addLogMessage('player', 'heal', attackValue);
            //attacks player back
            this.attackPlayer();
        },

        surrender(){
            this.playerHealth = 0;
            return this.winner = "monster";
        },

        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });

        },
    },

    // constantly checked methds
    computed: {

        monsterBarStyles(){
            if (this.monsterHealth <0) {
                return{width: '0%'};
            }
            return { width: this.monsterHealth + '%'};
        },

        playerBarStyles(){
            if (this.playerHealth <0) {
                return{width: '0%'};
            }
            return { width: this.playerHealth + '%'};
        },

        // mayUseSpecialAttack(){
        //     return this.currentRound % 3 !==0;
        // },

    },

    watch: {
        // watching data properties
        playerHealth(value){
            // console.log(this.playerHealth);
            if (value <=0 && this.monsterHealth <= 0) {
                //draw
                this.winner = 'draw';
            } else if (value <0){
                // player lost
                this.winner = 'monster';
            }
        },

        monsterHealth(value){
            // console.log(this.monsterHealth);
            if (value <=0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <0){
                // monster lost
                this.winner = 'player';
            }
        },

    },
});

app.mount('#game');
