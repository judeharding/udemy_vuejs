const app = Vue.createApp({

    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
        };
    },

    methods: {
        boxSelected(box){
            if (box === "A") {
                //toggeling box status
                this.boxASelected = !this.boxASelected;
            } else if (box === "B") {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === "C") {
                this.boxCSelected = !this.boxCSelected;
            } else if (box === "D") {
                this.boxDSelected = !this.boxDSelected;
            }
        }

    },

    computed: {

        boxCClasses(){
            return { active: this.boxCSelected };
        },

        boxDClasses(){
            return { active: this.boxDSelected };
        },
    },

    watch: {},
});

app.mount('#styling');