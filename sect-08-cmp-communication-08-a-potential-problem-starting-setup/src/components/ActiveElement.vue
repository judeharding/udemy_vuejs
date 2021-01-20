<template>
  <!-- changes the topic title based on what the user clicked  -->
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  // making the title available to the app.vue page
  props: ['topicTitle', 'text']
};
</script>
