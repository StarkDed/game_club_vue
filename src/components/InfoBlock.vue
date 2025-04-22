<template>
  <div class="infoBlock">
    <h2>{{ headingText }}</h2>
    <p>some Text</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  headingText: String,
});
</script>

<style scoped>
.infoBlock {
  width: 250px;
  height: 300px;
  border: 2px solid white;
  margin-top: 30px;
  border-radius: 15px;
  color: white;
}
h2 {
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
}
</style>