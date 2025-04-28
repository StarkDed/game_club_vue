<template>
  <header>
    <router-link to="/">
      <span>GameClub</span>
    </router-link>
    <div class="options">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/rants">rants</router-link>
        <router-link to="">about us</router-link>
      </nav>
      <div v-if="!authStore.isAuthenticated">
        <button class="signIn authButton" @click="navigateToAuth('login')">
          Sign in
        </button>
        <button class="signUp authButton" @click="navigateToAuth('register')">
          Sign up
        </button>
      </div>
      <User
        class="iconUser"
        v-else
        @click="isUserMenuOpen = !isUserMenuOpen"
      ></User>
      <div
        class="userMenu"
        :style="{ display: isUserMenuOpen ? 'flex' : 'none' }"
      >
        <CancelIcon
          class="cancelIcon"
          @click="isUserMenuOpen = !isUserMenuOpen"
        ></CancelIcon>
        <button class="myRantsButton">My Rants</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/authStore.js";
import { ref } from "vue";
import User from "@/assets/svgs/User.vue";
import CancelIcon from "@/assets/svgs/CancelIcon.vue";

const router = useRouter();
const authStore = useAuthStore();

const isUserMenuOpen = ref(false);

const navigateToAuth = (mode) => {
  router.push({
    path: "/auth",
    query: { mode: mode },
  });
};
</script>

<style scoped>
header {
  background: #000;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header span {
  font-family: "Special Gothic Expanded One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 30px;
  margin-left: 10px;
}
.options {
  display: flex;
  align-items: center;
}
button {
  cursor: pointer;
  outline: none;
}
.authButton {
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  padding: 12px 10px;
  margin-right: 5px;
}
.signIn {
  border: 1px solid yellow;
  color: yellow;
  background: transparent;
}
.signIn:active {
  background: yellow;
  color: black;
}
.signUp {
  border: 2px solid black;
  color: black;
  background: yellow;
  font-weight: 500;
}
.signUp:active {
  color: yellow;
  background: transparent;
  border: 2px solid yellow;
}
a {
  text-decoration: none;
}
nav a {
  margin-right: 20px;
  font-size: 18px;
  color: white;

  padding: 5px 7px;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
nav a:hover {
  color: black;
  background: yellow;
}
.iconUser {
  margin-right: 5px;
  cursor: pointer;
}
.userMenu {
  opacity: 1;
  height: 100vh;
  width: 260px;
  background-color: yellow;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
}
.cancelIcon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.myRantsButton {
  background: transparent;
  border: none;

  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}
</style>