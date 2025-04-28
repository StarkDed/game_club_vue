<template>
  <div class="rantsWindow">
    <h1>Rants</h1>
    <h2>Standart</h2>
    <div class="groupRants standart">
      <Rant v-for="rant in rants[0]" :key="rant.id" :rant="rant" />
    </div>
    <h2>Console</h2>
    <div class="groupRants console">
      <Rant v-for="rant in rants[1]" :key="rant.id" :rant="rant" />
    </div>
    <h2 style="color: yellow">VIP</h2>
    <div class="groupRants vip">
      <Rant v-for="rant in rants[2]" :key="rant.id" :rant="rant" />
    </div>
  </div>
</template>

<script setup>
import Rant from "@/components/Rant.vue";
import { reactive } from "vue";

const rants = reactive([
  [
    {
      id: 1,
      price: "5$",
      time: "1 hour",
      type: "standart",
      hardware: {
        graphicCard: "RTX 3060",
        processor: "Ryzen 5 5600x",
        ram: "16Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 2,
      price: "10$",
      time: "3 hour",
      type: "standart",
      hardware: {
        graphicCard: "RTX 3060",
        processor: "Ryzen 5 5600x",
        ram: "16Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 3,
      price: "15$",
      time: "5 hour",
      type: "standart",
      hardware: {
        graphicCard: "RTX 3060",
        processor: "Ryzen 5 5600x",
        ram: "16Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 4,
      price: "8$",
      time: "1 hour",
      type: "main",
      hardware: {
        graphicCard: "RTX 4070ti",
        processor: "Intel i5 14600KF",
        ram: "32Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 5,
      price: "13$",
      time: "3 hour",
      type: "main",
      hardware: {
        graphicCard: "RTX 4070ti",
        processor: "Intel i5 14600KF",
        ram: "32Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 6,
      price: "18$",
      time: "5 hour",
      type: "main",
      hardware: {
        graphicCard: "RTX 4070ti",
        processor: "Intel i5 14600KF",
        ram: "32Gb DDR4",
        monitor: "165Hz 1440p",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
  ],
  [
    {
      id: 7,
      price: "6$",
      time: "1 hour",
      type: "consoleBasic",
      hardware: {
        model: "PlayStation 5",
        amountOfJoysticks: 2,
      },
    },
    {
      id: 8,
      price: "11$",
      time: "3 hour",
      type: "consoleBasic",
      hardware: {
        model: "PlayStation 5",
        amountOfJoysticks: 2,
      },
    },
    {
      id: 9,
      price: "16$",
      time: "5 hour",
      type: "consoleBasic",
      hardware: {
        model: "PlayStation 5",
        amountOfJoysticks: 2,
      },
    },
    {
      id: 10,
      price: "5$",
      time: "1 hour",
      type: "consoleAdditional",
      hardware: {
        model: "Xbox Series X",
        amountOfJoysticks: 2,
      },
    },
    {
      id: 11,
      price: "10$",
      time: "3 hour",
      type: "consoleAdditional",
      hardware: {
        model: "Xbox Series X",
        amountOfJoysticks: 2,
      },
    },
    {
      id: 12,
      price: "15$",
      time: "5 hour",
      type: "consoleAdditional",
      hardware: {
        model: "Xbox Series X",
        amountOfJoysticks: 2,
      },
    },
  ],
  [
    {
      id: 13,
      price: "10$",
      time: "1 hour",
      type: "VIP",
      hardware: {
        graphicCard: "RTX 4090",
        processor: "Ryzen 9 9950X3D",
        ram: "64Gb DDR4",
        monitor: "160Hz 4k",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 14,
      price: "16$",
      time: "3 hour",
      type: "VIP",
      hardware: {
        graphicCard: "RTX 4090",
        processor: "Ryzen 9 9950X3D",
        ram: "64Gb DDR4",
        monitor: "160Hz 4k",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
    {
      id: 15,
      price: "21$",
      time: "5 hour",
      type: "VIP",
      hardware: {
        graphicCard: "RTX 4090",
        processor: "Ryzen 9 9950X3D",
        ram: "64Gb DDR4",
        monitor: "160Hz 4k",
        keyboard: "Razer BlackWidow V3 Tenkeyless",
        mouse: "Razer Basilisk V3",
        headphones: "Razer BlackShark V2",
      },
    },
  ],
]);
</script>

<style scoped>
.rantsWindow {
  max-width: 940px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  margin: 0 auto;

  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}
h1 {
  margin-top: 10px;
}
h2 {
  margin-top: 70px;
}
.groupRants {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
</style>