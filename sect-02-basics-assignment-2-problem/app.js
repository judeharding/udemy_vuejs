const app = Vue.createApp({
    data() {
      return {
        usrInput1: '',
        usrInput2: '',
      };
    },
  
    // methods are connected to EVENTS
    methods: {
        alertMsg(){
            alert("Hello! I am an alert box!!"); 
      },
  
      enteredText1(event){
        this.usrInput1 = event.target.value;
      },

      enteredText2(event){
        this.usrInput2 = event.target.value;
      },
     
    },
  });
  
  app.mount('#assignment');
  