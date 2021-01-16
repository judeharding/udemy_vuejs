const app = Vue.createApp({

    data(){
        return {
            tasks: [],
            enteredTaskValue: '',
            taskListVisible: true,

        };
    },

    methods: {

        addTask(){
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = '';
        },

        toggleTaskList(){
            this.taskListVisible = !this.taskListVisible;
        },
    },

    computed: {

        hideShowButtonText(){
            return this.taskListVisible ? 'Hide List' : 'Show List';
        },
        
    },

    watch: {},
});

app.mount('#assignment');