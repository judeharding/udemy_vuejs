const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '', 
      lastName: '',
    };
  },

  // use methods when you want to recalculate a value if ANYTHING ,
    // when an EVENT occurs
  methods: {
    // named like the action they perform
    setName(event) {
    // setName(event, lastName) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = '';
    },

    outputFullName(){
      console.log('running from methods');
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + "METHODHarding";
      }
      
    },
  },

  // for outputing values, use computed for better performance 
  // calculate output dynamically 
  computed: {
    // named like data properties not like a method
    fullName(){
      console.log('running from computed');
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    },
  },

  // for logic that updates a data property but not every single time
  // like timers or http requests  
  watch: {
    counter(value){
      if (this.counter > 50) {
        this.counter = 0;
      } 
    },
  },

})

app.mount('#events');
