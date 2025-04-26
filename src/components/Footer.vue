<template>
  <footer>
    <div class="contacts">
      <span>Contacts</span>
      <ul>
        <li>+375297845678</li>
        <li>+375297845678</li>
      </ul>
    </div>
    <div class="adress">
      <p>Adress:Far far away</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background: yellow;
  height: 100px;
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 30px;

  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.contacts ul {
  list-style: none;
}
.adress {
  align-self: flex-start;
}
</style>