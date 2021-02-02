<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <p>{{ user }}</p>
    <h3>{{ user.age }}</h3>
    <button v-on:click="setAge">Change Age</button>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const user = reactive({
      name: 'Maximilian',
      age: 31
    });

    // setTimeout(function() {
    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000);

    function setNewAge() {
      user.age = user.age + 1;
    }

    return { user: user, setAge: setNewAge }; // not reactive values
  }
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
