<template>
  <div class="homePage">
    <h1>Welcome to GameClub</h1>
    <h2>There you will find:</h2>
    <div class="infoBlocks">
      <InfoBlock></InfoBlock>
      <InfoBlock></InfoBlock>
      <InfoBlock></InfoBlock>
    </div>
    <SmileCompucter :blinkColor="blinkColor"></SmileCompucter>
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";
import SmileCompucter from "@/components/SmileCompucter.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const blinkColor = ref("yellow");
let intervalid = null;

onMounted(() => {
  intervalid = setInterval(() => {
    blinkColor.value = blinkColor.value === "yellow" ? "white" : "yellow";
  }, 800);
});

onBeforeUnmount(() => {
  if (intervalid) clearInterval(intervalid);
});
</script>

<style scoped>
.homePage {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
h1 {
  text-align: center;
  color: white;
  margin-top: 10px;
}
h2 {
  text-align: center;
  color: white;
}
.infoBlocks {
  display: flex;
  justify-content: center;
}
.infoBlock {
  margin-right: 30px;
}
</style>