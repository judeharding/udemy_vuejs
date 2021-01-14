const app = Vue.createApp({

    data(){
        return {
            counter: 0,
            msg1: "NOT THERE YET",
            msg2: "TOO MUCH", 

        };
    },

    methods: {
        addFive(){
            return this.counter = this.counter + 5;
        },

        addOne(){
            this.counter = this.counter + 1;
        },
    },

    computed: {
        msg(){
            if (this.counter < 37) {
                return this.msg1;
            } else  if(this.counter == 37) {
                return 'PERFECT';
            } else {
                return 'TOO MUCH';
            }
        },
    },

    watch: {},
});

app.mount('#assignment');
