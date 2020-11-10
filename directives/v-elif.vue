<template>
  <div id="app">
    <h3>Do you love animals?</h3>
    <input type="radio" name="yes" id="yes" value="yes" v-model="lovesAnimal" />
    <label for="yes">Yes</label>

    <input type="radio" name="no" id="no" value="no" v-model="lovesAnimal" />
    <label for="no">No</label>

    <br />
    <p v-if="lovesAnimal === 'yes'">You're So Cute 🥰</p>
    <p v-else-if="lovesAnimal === 'no'">Why !!! 😢</p>
    <p v-else>Click on a button above !!!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lovesAnimal: "",
    };
  },
};
</script>

<style>
</style>