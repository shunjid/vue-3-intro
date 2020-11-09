<!-- Demo: https://cdpn.io/_shunjid/debug/OJXBvJV/LQAExgYZqJQr -->
<template>
  <div id="app">
    <h3 class="default">Please check all that applies to your identity</h3>
    <h4 class="default">{{ checkedNames }}</h4>
    <span v-for="option in options" :key="option">
      <input
        v-model="checkedNames"
        type="checkbox"
        :id="option.value"
        :value="option.value"
      />
      <label class="default" :for="option.value">{{
        option.value.toUpperCase()
      }}</label>
      <br />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: [],
      options: [
        {
          value: "Asian",
        },
        {
          value: "European",
        },
        {
          value: "American",
        },
        {
          value: "African",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.default {
  font-family: "Roboto", sans-serif;
}
</style>