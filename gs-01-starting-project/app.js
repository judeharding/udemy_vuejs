// initializing vue 
// createApp takes an object where we configure the app 
Vue.createApp({

    // Setting Data
    // data: function(){} // old way of setting te property named data
    data (){
        return {
           goals: [],
           enteredValue: '' // will pull from html v-model attribute
        };
    }, 

    // methods and functions are action keys
    methods:{
        addGoal(){
        this.goals.push(this.enteredValue); // is connected to button on html
        
        // clear out the input field for user to enter in more data 
        this.enteredValue = '';
        }
    }
    // mounting to the div id app on html
}).mount('#app');










// RAW VANILLA JS

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// // functions

// function addGoal() {

// const enteredValue = inputEl.value;
// const listItemEl = document.createElement('li');

// listItemEl.textContent = enteredValue;
// listEl.appendChild(listItemEl);

// inputEl.value = '';

// }

// // action items
// buttonEl.addEventListener('click', addGoal);