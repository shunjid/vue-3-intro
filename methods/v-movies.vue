<!-- Demo: https://cdpn.io/_shunjid/debug/abZQQYa/bYMdypbVOnDr -->
<template>
  <div id="app">
    <div class="row">
      <div class="input-field col s12 l4">
        <i class="material-icons prefix">search</i>
        <input
          id="icon_prefix"
          type="text"
          class="validate"
          v-model="filterText"
        />
        <label for="icon_prefix">Find by title</label>
      </div>
    </div>

    <div class="row">
      <div class="l6">
        <a
          class="btn-floating waves-effect waves-light red darken-2"
          @click="sortLowest"
          ><i class="material-icons">south</i></a
        >
        <a
          class="btn-floating waves-effect waves-light indigo darken-1"
          @click="sortHighest"
          ><i class="material-icons">north</i></a
        >
      </div>
    </div>

    <div class="row">
      <div
        class="col s12 m6 l2"
        v-for="(entry, entryIndex) in filteredFilms"
        :key="entryIndex"
      >
        <div class="card">
          <div class="card-image">
            <img :src="entry.image" />
            <a
              class="btn-floating halfway-fab waves-effect waves-light red"
              :href="entry.trailerLink"
              target="_blank"
              ><i class="material-icons">play_arrow</i></a
            >
          </div>
          <div class="card-content">
            <h6>{{ entry.title }}</h6>
            <p><b>Rating:</b> {{ entry.rating }}</p>
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
      filterText: "",
      ratingsInfo: [
        {
          title: `Taish`,
          image: `https://i.imgur.com/jydNKlb.jpg`,
          rating: 9.7,
          trailerLink: "https://www.youtube.com/watch?v=9H7txI-rTXc",
        },
        {
          title: `Comedy Couple`,
          image: `https://i.imgur.com/ewfVLas.jpg`,
          rating: 9.2,
          trailerLink: "https://www.youtube.com/watch?v=ZiA-F8aizhc",
        },
        {
          title: `Laxmii`,
          image: `https://i.imgur.com/OHzJLUK.jpg`,
          rating: 2.5,
          trailerLink: "https://www.youtube.com/watch?v=xw0gE8QA1W0",
        },
        {
          title: `Kaali Khuhi`,
          image: `https://i.imgur.com/66YaN1h.jpg`,
          rating: 4.1,
          trailerLink: "https://www.youtube.com/watch?v=kji5F02FemY",
        },
        {
          title: `London Confidential`,
          image: `https://i.imgur.com/tgkiblc.jpg`,
          rating: 8.1,
          trailerLink: "https://www.youtube.com/watch?v=JXNrRD0hk_A",
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
  computed: {
    filteredFilms() {
      const filter = new RegExp(this.filterText, "i");
      return this.ratingsInfo.filter((el) => el.title.match(filter));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css");
</style>