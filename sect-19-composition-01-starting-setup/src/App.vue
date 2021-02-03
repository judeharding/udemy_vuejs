<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.uName }}</h3>
    <p>{{ user }}</p>
    <h3>{{ user.age }}</h3>
    <button v-on:click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="first name" @input="setFirstName" />
      <input type="text" placeholder="last name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const user = reactive({
      uName: '',
      name: '',
      age: 31,
      firstName: '',
      lastName: ''
    });

    // setTimeout(function() {
    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000);

    function setNewAge() {
      user.age = user.age + 1;
    }

    function setFirstName(event) {
      user.firstName.value = event.target.value;
    }

    function setLastName(event) {
      user.lastName.value = event.target.value;
    }

    const uName = computed(function() {
      return firstName + ' ' + lastName;
    });

    return {
      user: user,
      setAge: setNewAge,
      setFirstName: setFirstName,
      setLastName: setLastName,
      uName: uName,
      firstName: user.firstName,
      lastName: user.lastName
    }; // not reactive values
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
