import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },

    increase(state, payload) {
      console.log('STATE IS >>> ', state);
      state.counter = state.counter + payload.value;
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
    }
  }
};

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      // counter: 0,
      // moving counter to module and leaving auth in the root
      isLoggedIn: false
    };
  },
  mutations: {
    SVGPathSegCurvetoQuadraticSmoothAbs(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },

    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },

  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },

    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
