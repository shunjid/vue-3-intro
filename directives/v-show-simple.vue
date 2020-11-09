<!-- Demo: https://cdpn.io/_shunjid/debug/KKMGxEj/mWMoNzvZNZxk -->
<template>
  <div id="app">
    <h3>What is your favourite color?</h3>
    <textarea
      name="color"
      id="color"
      cols="30"
      rows="2"
      v-model="favouriteColor"
    ></textarea>
    <br />
    <button
      type="submit"
      v-show="favouriteColor"
    >
      Let us know !!
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favouriteColor: "",
    };
  },
};
</script>