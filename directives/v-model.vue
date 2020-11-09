<!-- Demo: https://cdpn.io/_shunjid/debug/BazqYWe/mWAoNzvBEqvr -->
<template>
  <div id="app">
    <h2 class="default">Type Here</h2>
    <textarea v-model="message" rows="5" maxlength="72" />
    <br />
    <p class="default">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a good place to type things !!!",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2family=Roboto:wght@300&display=swap");

.default {
  font-family: "Roboto", sans-serif;
}
</style>