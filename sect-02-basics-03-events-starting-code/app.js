const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },

  // methods are connected to EVENTS
  methods: {
    addToCounter(num){
       this.counter = this.counter + num;
    },

    subtractFromCounter(num){
      this.counter = this.counter - num;
    },

    enteredName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },

    submitForm(event){
      event.preventDefault();
      alert('submitted!!!');
    },

    confirmedInput(){
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
