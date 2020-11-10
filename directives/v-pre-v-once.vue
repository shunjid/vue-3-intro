<!-- Demo: https://cdpn.io/_shunjid/debug/OJXaPWx/mVkbGwbWLKpM -->
<template>
  <div id="app">
    <input type="text" name="food" id="food" v-model="favouriteFood">
    <br>
    <span v-once>
        Initally loaded once: {{ favouriteFood }}
    </span>
    <br>

    <h3 v-pre>Dynamically loaded {{ favouriteFood }}</h3>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favouriteFood: 'Pizza'
    };
  }
};
</script>