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
      <button class="signIn" @click="navigateToAuth('login')">Sign in</button>
      <button class="signUp" @click="navigateToAuth('register')">
        Sign up
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

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
  height: 60px;
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
  margin-right: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  padding: 12px 10px;
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
</style>