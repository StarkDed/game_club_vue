<template>
  <div class="authForm">
    <div class="form">
      <h2>{{ authText }}</h2>
      <p class="messageText">{{ messageText }}</p>
      <div class="form-group">
        <label for="login">Login</label>
        <input type="text" id="login" v-model="login" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="form-group" v-if="route.query.mode === 'register'">
        <label for="passwordConfirm">Confirm password</label>
        <input type="password" id="passwordConform" />
      </div>
      <div class="form-group" v-if="route.query.mode === 'register'">
        <label for="Email">Email</label>
        <input type="email" id="Email" v-model="email" />
      </div>
      <button class="authButton" @click="authHandler">{{ authText }}</button>
      <button class="toggleButton" @click="toggleAuthText">
        {{ toggleText }}
      </button>
      <!-- <button class="authButton" @click="fetchData"></button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const login = ref("");
const password = ref("");
const email = ref("");
const messageText = ref("");

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

const authHandler = () => {
  if (route.query.mode === "login") {
    loginHandler();
  } else if (route.query.mode === "register") {
    registerHandler();
  }
};

const registerHandler = async () => {
  try {
    const response = await fetch("http://localhost:3000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.value,
        password: password.value,
        email: email.value,
      }),
    });

    if (!response.ok) {
      throw new Error(`Http error, status:${response.status}`);
    }

    const result = await response.json();
    console.log("Пока так", result);
  } catch (error) {
    console.log("Error on client {register}", error);
  }
};

const loginHandler = async () => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.value,
        password: password.value,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      messageText.value = result.error;
      throw new Error(result.error);
    }

    console.log("Получилось?", result.message);
    messageText.value = result.message;
    console.log("Вот что пришло", result.user);
  } catch (error) {
    console.log("Error on login ", error);
  }
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
.messageText {
  color: red;
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