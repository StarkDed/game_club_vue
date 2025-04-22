<template>
  <div class="app">
    <Header></Header>
    <HomePage></HomePage>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  background: #000;
  width: 100%;
  min-height: 100vh;
}
</style>