<template>
  <div id="app">
    <div>
      <label for="min">Minimum Range</label><br />
      <input
        type="number"
        name="min"
        id="min"
        v-model="minimum"
        @change="counter = counter < minimum ? minimum : 0"
      /><br />
      <label for="max">Max Range</label><br />
      <input
        type="number"
        name="min"
        id="min"
        v-model="maximum"
        @change="counter = 0"
      /><br />

      <table>
        <tr>
          <td>
            <button
              @click="counter = counter > minimum ? counter - 1 : minimum"
            >
              -
            </button>
          </td>
          <td>
            <p>Buy Burgers: {{ counter }}</p>
          </td>
          <td>
            <button
              @click="counter = counter < maximum ? counter + 1 : maximum"
            >
              +
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minimum: 0,
      maximum: 5,
      counter: 0,
    };
  },
};
</script>

<style>
button {
  border: none;
  background-color: aqua;
}
</style>