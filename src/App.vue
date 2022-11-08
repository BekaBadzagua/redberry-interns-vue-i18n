<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(212, 212, 212);
}
</style>
