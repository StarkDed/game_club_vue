<template>
  <div class="authForm">
    <div class="form">
      <h2>{{ authText }}</h2>
      <div class="form-group">
        <label for="login">Login</label>
        <input type="text" id="login" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button class="authButton">{{ authText }}</button>
      <button class="toggleButton" @click="toggleAuthText">
        {{ toggleText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const authText = ref("Log in");
const toggleText = ref("Registration");

const updateTexts = (mode) => {
  if (mode === "login") {
    authText.value = "Sign in";
    toggleText.value = "Registration";
  } else {
    authText.value = "Sign up";
    toggleText.value = "Log in";
  }
};

watch(
  () => route.query.mode,
  (newMode) => {
    updateTexts(newMode);
  },
  { immediate: true }
);

const toggleAuthText = () => {
  const newMode = route.query.mode === "login" ? "register" : "login";
  router.push({
    path: "/auth",
    query: { mode: newMode },
  });
};
</script>

<style scoped>
.authForm {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  color: white;
  display: flex;
  justify-content: center;
}
h2 {
  text-align: center;
}
.form {
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.form-group {
  width: 100%;
  margin-bottom: 5px;
}
.form-group label {
  font-size: 20px;
  font-weight: 400;
}
.form-group input {
  border: 2px solid yellow;
  width: 100%;
  background: transparent;
  color: white;
  padding: 7px 10px;
  font-size: 18px;
  outline: none;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  border-radius: 10px;
}
.authButton {
  max-width: 100px;
  background: transparent;
  border: 2px solid white;
  outline: none;
  padding: 7px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 7px;
  margin-top: 20px;
}
.authButton:hover {
  box-shadow: 0 0 20px 0 yellow;
}
.authButton:active {
  background: yellow;
  color: black;
  border-color: yellow;
  box-shadow: none;
}
.toggleButton {
  background: transparent;
  color: yellow;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 15px;
}
</style>