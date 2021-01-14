const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  // use methods when you want to recalculate a value if ANYTHING ,
    // like a counter, in the section changes
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
        return this.name + ' ' + "Harding";
      }
      
    },
  },

  // for outputing values, use computed for better performance 
  computed: {
    // named like data properties not like a method
    fullName(){
      console.log('running from computed');
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + "Harding";
      }
    },
  },

})

app.mount('#events');
