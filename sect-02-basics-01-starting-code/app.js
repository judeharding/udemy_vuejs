// initates Vuejs by passing an object
const app = Vue.createApp({

    // data key wants a function
    data:  function(){
        // data RETURNS an object that usually hold values entered from html
        return {
            // key / value pairs
            courseGoalA: 'Finish course and learn Vue!',
            courseGoalB: 'You have MASTERED Vue!',
            vueLink: 'https://vuejs.org'

        };
    },

    // methods are executed WHEN something happens on the html page
    // methods is an object full of functions
    methods: {
        outputGoal(){
            const randoNum = Math.random();

            if(randoNum <0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },


    },
});

// mount holds a css selector we want to control
app.mount('#user-goal');



