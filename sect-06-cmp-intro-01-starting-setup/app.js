const app = Vue.createApp({

    data(){
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123-456-7890',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '987-654-3211',
                    email: 'jules@localhost.com',
                },
            ],
        };
    },

    methods: {},

    computed: {},

    watch: {},
});

app.component('friend-contact', {
    //NOTE BACK TICKS IN TEMPLATE
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button v-on:click="toggleButton()">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
                <ul v-if="detailsAreVisible">
                    <li><strong>Phone:</strong> {{ friend.phone }}</li>
                    <li><strong>Email:</strong> {{ friend.email }}</li>
                </ul>
        </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '123-456-7890',
                email: 'manuel@localhost.com',
            },
        };
    },
    methods: {
        toggleButton(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },

});

app.mount('#app');
