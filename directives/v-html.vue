<!-- Demo: https://cdpn.io/_shunjid/debug/mdEQJXQ/DqADdYJNBoWA -->
<template>
  <div id="app">
    <p v-html="tacos"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tacos: `
            <p>Hacking <button onclick="alert('yo !!');">the hackers</button> hack</p>
        `
    };
  }
};
</script>