import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },

    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },

    SVGPathSegCurvetoQuadraticSmoothAbs(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },

    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },

  actions: {
    increment(context) {
      // maybe for HTTP REQUESTS
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },

    increase(context, payload) {
      context.commit('increase', payload);
    },

    login(context) {
      context.commit('setAuth', { isAuth: true });
    },

    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },

  getters: {
    finalCounter(state, getters) {
      console.log(getters);
      return state.counter;
    },

    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },

    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
