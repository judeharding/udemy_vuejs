<template>
  <base-container title="Vuex" v-if="isAuth">
    <h3>{{ finalCounter }}</h3>
    <button v-on:click="addOne()">Add 1</button>
    <button v-on:click="addOneLater()">Add 1 Later</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    UserAuth
  },

  data() {
    return {};
  },

  methods: {
    // addOne() {
    //   this.$store.state.counter++;
    // },

    ...mapActions(['increment', 'increase']),

    addOne() {
      // now using the main.js MUTATIONS
      this.$store.commit('increment');
    },

    addOneLater() {
      this.$store.dispatch('increment', { value: 10 }); // works
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 10
      // });
    }
  },

  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // }

    // USING GETTERS thru mainjs
    // counter() {
    //   // return this.$store.getters.finalCounter;
    //   return this.$store.getters.normalizedCounter;
    // }
    // don't drill into the store
    ...mapGetters(['finalCounter']),

    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },

  watch: {}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
