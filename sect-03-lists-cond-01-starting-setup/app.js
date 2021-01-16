const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [],
    };
  },

  methods:{

    // setFocus(){
    //   this.$refs.enteredGoalValue.$input.focus();
    // },

    addGoal(){
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
      // this.enteredGoalValue.setFocus;
    },

    removeGoal(index){
      this.goals.splice(index, 1);
    },
  },

  computed:{},

  watch:{},

});

app.mount('#user-goals');
