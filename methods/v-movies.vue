<!-- Demo: https://cdpn.io/_shunjid/debug/abZQQYa/bYMdypbVOnDr -->
<template>
  <div id="app">
    <h3>Sort titles by</h3>
    <div class="row">
      <div class="col s6 l6">
        <a
          class="waves-effect waves-light btn btn-small red darken-2"
          @click="sortLowest"
          ><i class="material-icons left">south</i>Lowest Rated</a
        >
      </div>
      <div class="col s6 l6">
        <a
          class="waves-effect waves-light btn btn-small indigo"
          @click="sortHighest"
          ><i class="material-icons left">north</i>Highest Rated</a
        >
      </div>
    </div>

    <div class="row">
      <div class="col s12 m12 l4" v-for="(entry, entryIndex) in ratingsInfo" :key="entryIndex">
        <div class="card horizontal">
          <div class="card-image">
            <img :src="entry.image" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h4 class="header">{{ entry.title }}</h4>
              <h5><b>Movie Rating:</b> {{ entry.rating }}</h5>
            </div>
            <div class="card-action">
              <a href="#">Watch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [
        {
          title: `Taish`,
          image: `https://i.imgur.com/jydNKlb.jpg`,
          rating: 9.7,
        },
        {
          title: `Comedy Couple`,
          image: `https://i.imgur.com/ewfVLas.jpg`,
          rating: 9.2,
        },
        {
          title: `Laxmii`,
          image: `https://i.imgur.com/OHzJLUK.jpg`,
          rating: 2.5,
        },
        {
          title: `Kaali Khuhi`,
          image: `https://i.imgur.com/66YaN1h.jpg`,
          rating: 4.1,
        },
        {
          title: `London Confidential`,
          image: `https://i.imgur.com/tgkiblc.jpg`,
          rating: 8.1,
        },
      ],
    };
  },
  methods: {
    sortLowest() {
      this.ratingsInfo.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css");
</style>

