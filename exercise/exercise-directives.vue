<!-- Demo: https://cdpn.io/_shunjid/debug/PozxqXr/WPALYRPygzJk -->
<template>
  <div id="app">
    <div class="row">
      <input
        type="number"
        name="first"
        id="first"
        v-model.number="first"
        @change="sum = first + second"
        @input="sum = first + second"
      />
      <span>+</span>
      <input
        type="number"
        name="second"
        id="second"
        v-model.number="second"
        @change="sum = first + second"
        @input="sum = first + second"
      />
      <span>=</span>
      <span>{{ sum }}</span>
    </div>
    <div class="row second">
      <select name="favouriteAnimal" id="favouriteAnimal" v-model="message">
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
      <p v-show="message">My favourite animal is {{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: 0,
      second: 0,
      sum: 0,
      message: "",
    };
  },
};
</script>

<style>
.row {
  margin: 50px;
  display: flex;
  justify-content: center;
  font-family: "Work Sans", sans-serif;
}
input,
span {
  padding: 10px;
  font-size: 30px;
  font-family: "Work Sans", sans-serif;
}
input {
  width: 50px;
}
span {
  width: 20px;
}
.second {
  font-size: 18px;
}
.second p {
  margin-left: 20px;
}
</style>