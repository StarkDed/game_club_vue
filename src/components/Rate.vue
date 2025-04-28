<template>
  <div
    class="rate"
    :style="{ borderColor: props.rate.type === 'VIP' ? 'yellow' : 'white' }"
  >
    <div class="window">
      <component :is="currentIcon" />
    </div>
    <h3 class="time">{{ props.rate.time }}</h3>
    <div class="hardware">
      <ul
        v-if="
          props.rate.type !== 'consoleBasic' &&
          props.rate.type !== 'consoleAdditional'
        "
      >
        <li>
          Graphic card: <span>{{ props.rate.hardware.graphicCard }}</span>
        </li>
        <li>
          Processor: <span>{{ props.rate.hardware.processor }}</span>
        </li>
        <li>
          Ram: <span>{{ props.rate.hardware.ram }}</span>
        </li>
        <li>
          Monitor: <span>{{ props.rate.hardware.monitor }}</span>
        </li>
        <li>
          Keyboard: <span>{{ props.rate.hardware.keyboard }}</span>
        </li>
        <li>
          Mouse: <span>{{ props.rate.hardware.mouse }}</span>
        </li>
        <li>
          Headphones: <span>{{ props.rate.hardware.headphones }}</span>
        </li>
      </ul>
      <ul v-else>
        <li>
          Model: <span>{{ props.rate.hardware.model }}</span>
        </li>
        <li>
          Amount Of Joysticks:
          <span>{{ props.rate.hardware.amountOfJoysticks }}</span>
        </li>
      </ul>
    </div>
    <button @mouseover="isHovered = true" @mouseleave="isHovered = false">
      {{ isHovered ? "Rent" : props.rate.price }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";
import SmilePC from "@/assets/svgs/SmilePC.vue";
import GameConsole from "@/assets/svgs/GameConsole.vue";
import Monitor from "@/assets/svgs/Monitor.vue";
import GamePC from "@/assets/svgs/GamePC.vue";
import Tablet from "@/assets/svgs/Tablet.vue";

const isHovered = ref(false);

const props = defineProps({
  rate: {
    type: Object,
  },
});

const icons = {
  standart: SmilePC,
  main: GamePC,
  consoleBasic: GameConsole,
  consoleAdditional: Tablet,
  VIP: Monitor,
};

const currentIcon = computed(() => icons[props.rate.type]);
</script>

<style scoped>
.rate {
  width: 300px;
  padding: 20px;
  border: 2px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
.window {
  width: 200px;
  height: 130px;
  align-self: center;
  background: yellow;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.time {
  align-self: center;
  margin-top: 5px;
}
.hardware {
  border-left: 3px solid white;
  padding-left: 10px;
  margin-top: 10px;
}
.hardware ul {
  list-style: none;
  color: yellow;
  font-weight: 400;
}
.hardware ul span {
  font-weight: 400;
  color: white;
}
.rate button {
  margin-top: 25px;
  display: inline;
  cursor: pointer;
  align-self: center;
  background: yellow;
  padding: 5px 15px;
  border-radius: 2px;
  border: none;

  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
}
</style>