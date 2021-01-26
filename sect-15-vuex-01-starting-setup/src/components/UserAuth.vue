<template>
  <button v-on:click="login" v-if="!isAuth">Login</button>
  <button v-on:click="logout" v-if="isAuth">logout</button>
</template>
<script>
export default {
  data() {},

  methods: {
    login() {
      this.$store.dispatch('login');
    },

    logout() {
      this.$store.dispatch('logout');
    }
  },

  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style scoped></style>
