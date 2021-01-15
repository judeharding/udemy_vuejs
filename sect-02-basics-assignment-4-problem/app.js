const app = Vue.createApp({

    data(){
        return {
            usrInput: '',
            paragraphIsVisible: false,
            inputBackgroundColor: '', 
        };
    },

    computed: {
        paraClass(){
            return {
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        },
    },

    methods: {

        enteredText(event){
            this.usrInput = event.target.value;
            // console.log(this.usrInput);
        },

        togglePargraph(){
            this.paragraphIsVisible = !paragraphIsVisible;
        },
        
    },

    

    watch: {},
});

app.mount('#assignment');
