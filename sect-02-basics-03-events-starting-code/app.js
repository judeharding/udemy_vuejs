const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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

  },
});

app.mount('#events');
