const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },


  // LIFE CYCLE HOOKS for CREATION - might be used for http requests
  beforeCreate(){
    console.log("beforeCreate()");
  },

  // compile template
  created(){
    console.log("created()");
  },

  beforeMount(){
    console.log("beforeMount()");
  },

  // NOW you see something on the screen A MOUNTED VUE INSTANCE
  mounted(){
    console.log("mounted()");
  },

  // DATA CHANGES LIFE CYCLE HOOKS 

  beforeUpdate(){
    console.log("beforeUpdate()");
  },

  //NOW see changes on the screen
  updated(){
    console.log("updated()");
  },

// won't see this until the unmount procedure happens in the timeout below
  beforeUnmount(){
    console.log("beforeUnmount()");
  },
  
  unmounted(){
    console.log("unmounted()");
  },


});

app.mount('#app');

setTimeout(function(){
  app.unmount();
}, 3000);