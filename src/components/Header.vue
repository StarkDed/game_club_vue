<template>
  <header>
    <span>GameClub</span>
    <div class="options">
      <nav>
        <router-link to="">Home</router-link>
        <router-link to="">rants</router-link>
        <router-link to="">about us</router-link>
      </nav>
      <button class="signIn">Sign in</button>
      <button class="signUp">Sign up</button>
    </div>
  </header>
</template>

<script>
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
nav a {
  margin-right: 20px;
  font-size: 18px;
  color: white;
  text-decoration: none;
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