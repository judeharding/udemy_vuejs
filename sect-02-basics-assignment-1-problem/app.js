	// initates Vuejs by passing an object
	const app = Vue.createApp({
    
        // data key wants a function
        data:  function(){
                // data RETURNS an object that usually hold values entered from html
                return {
                
                    // key / value pairs
                    yourName:  'Jude',
                    yourAge:  30,
                    favNum0: 0,
                    favNum1: 1,
                    favImg: 'https://www.gstatic.com/webp/gallery/4.jpg',
                };
        },

        methods: {

            calcAge(){
                return this.yourAge + 5;
            },

            favNum(){
                const randoNum = Math.random();
                if (randoNum <0.5){
                    return this.favNum0;
                } else {
                    return this.favNum1;
                }
            }
        },
});

app.mount('#assignment');