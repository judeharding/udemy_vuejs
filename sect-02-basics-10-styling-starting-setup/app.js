const app = Vue.createApp({

    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },

    methods: {
        boxSelected(box){
            if (box === "A") {
                //toggeling box status
                this.boxASelected = !this.boxASelected;
            } else if (box === "B") {
                this.boxBSelected = !this.boxBSelected;
            }else if (box === "C") {
                this.boxCSelected = !this.boxCSelected;
            }
        }

    },

    computed: {},

    watch: {},
});

app.mount('#styling');