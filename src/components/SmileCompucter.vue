<template>
  <div>
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1128_8441)">
        <path
          d="M190.437 28.5625H180.938V19.0625H171.375V9.5H161.875V0H19V38.125H28.5625V47.625H38.0625V38.125H152.375V47.625H161.875V142.875H152.375V152.375H142.813V161.875H19V152.375H9.5V161.875H0V200H9.5V171.438H133.312V200H200V38.125H190.437V28.5625ZM38.0625 28.5625H28.5625V9.5H38.0625V28.5625ZM57.125 28.5625H47.5625V9.5H57.125V28.5625ZM142.813 28.5625H66.625V9.5H142.813V28.5625ZM190.437 95.25H180.938V47.625H171.375V38.125H161.875V28.5625H152.375V19.0625H161.875V28.5625H171.375V38.125H180.938V47.625H190.437V95.25Z"
          :fill="blinkColor"
        />
        <path
          d="M133.313 95.25H123.75V104.75H133.313V95.25Z"
          :fill="blinkColor"
        />
        <path
          d="M133.312 142.875H104.75V152.375H133.312V142.875Z"
          :fill="blinkColor"
        />
        <path
          d="M123.75 76.1875H114.25V85.6875H123.75V76.1875Z"
          :fill="blinkColor"
        />
        <path
          d="M123.75 200V180.938H95.1875V200H104.75V190.5H114.25V200H123.75Z"
          :fill="blinkColor"
        />
        <path
          d="M123.75 104.75H85.6875V114.313H123.75V104.75Z"
          :fill="blinkColor"
        />
        <path
          d="M95.1875 76.1875H85.6875V85.6875H95.1875V76.1875Z"
          :fill="blinkColor"
        />
        <path
          d="M85.6875 95.25H76.1875V104.75H85.6875V95.25Z"
          :fill="blinkColor"
        />
        <path
          d="M76.1875 142.875H66.625V152.375H76.1875V142.875Z"
          :fill="blinkColor"
        />
        <path
          d="M152.375 133.312V57.125H57.125V133.312H152.375ZM66.625 66.6875H142.813V123.812H66.625V66.6875Z"
          :fill="blinkColor"
        />
        <path
          d="M57.125 142.875H47.5625V152.375H57.125V142.875Z"
          :fill="blinkColor"
        />
        <path
          d="M47.5625 47.625H38.0625V133.312H47.5625V47.625Z"
          :fill="blinkColor"
        />
        <path
          d="M38.0625 133.312H28.5625V142.875H38.0625V133.312Z"
          :fill="blinkColor"
        />
        <path
          d="M28.5625 142.875H19V152.375H28.5625V142.875Z"
          :fill="blinkColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1128_8441">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  blinkColor: [String],
});
</script>

<style scoped>
</style>