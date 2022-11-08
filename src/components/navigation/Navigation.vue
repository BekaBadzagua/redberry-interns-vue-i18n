<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <div class="centered">
      <h1>navigation</h1>
      <router-link to="/">Simple Examples</router-link>
      <router-link to="/advanced">Advanced Examples</router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
a {
  margin: 0.625rem;
  color: black;
  text-decoration: none;
}
a:hover {
  color: orangered;
}
div {
  margin-bottom: 1.5em;
}
</style>
