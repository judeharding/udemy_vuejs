import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

// put any NAVIGATION GUARDS ABOVE THE CREATEAPP

// router.beforeEach(to, from, next){
//   console.log(to, from, next);
//   // can add AUTHENTICATIOIN ON EVERY PAGE HERE
//   next();
// };

const app = createApp(App);

app.use(router);

app.mount('#app');
