<!-- Demo: https://cdpn.io/_shunjid/debug/PozyMYp/yoMZEpzKWQDk -->
<template>
  <div id="app">
    <h3>What is your favourite color?</h3>
    <textarea v-model="color"></textarea>
    <br />
    <button :class="[color ? activeClass : '']">Wow</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
      activeClass: "active",
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 70px;
  max-width: 360px;
  font-size: 16px;
  margin: 0 auto;
  display: table;
  line-height: 2em;
}

button {
  border: none;
  color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
}

button.active {
  background-color: orangered;
}
</style>
