<template>
  <div class="homePage">
    <h1>Welcome to GameClub</h1>
    <h2>There you will find:</h2>
    <div class="infoBlocks">
      <InfoBlock :headingText="'Powerful computers'"></InfoBlock>
      <InfoBlock :headingText="'Good price'"></InfoBlock>
      <InfoBlock :headingText="'Good people'"></InfoBlock>
    </div>
    <SmileCompucter
      :blinkColor="blinkColor"
      class="smileComputerLeft"
    ></SmileCompucter>
    <SmileCompucter
      :blinkColor="blinkColor"
      class="smileComputerRight"
    ></SmileCompucter>
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";
import SmileCompucter from "@/assets/svgs/SmileCompucter.vue";
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
  width: 100%;
  min-height: 100vh;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  position: relative;
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
.smileComputerLeft {
  position: absolute;
  top: 20px;
  left: 20px;
}
.smileComputerRight {
  position: absolute;
  top: 20px;
  right: 20px;
}
.infoBlocks {
  display: flex;
  justify-content: center;
  gap: 30px;
}
</style>