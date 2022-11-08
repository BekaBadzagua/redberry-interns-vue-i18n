<script setup>
import { RouterView } from "vue-router";
import LanguageSelect from "@/components/shared/LanguageSelect.vue";
</script>

<template>
  <div class="content">
    <LanguageSelect />
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  background-color: rgb(212, 212, 212);
}
</style>
