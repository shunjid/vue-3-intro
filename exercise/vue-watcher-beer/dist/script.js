const App = {
  data() {
    return {
      bottom: false,
      beers: [] };

  },
  methods: {
    isBottomVisible() {
      const scrollY = window.scrollY;
      const element = document.documentElement;
      const visible = element.clientHeight;
      const pageHeight = element.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addBeer() {
      const api = 'https://api.punkapi.com/v2/beers/random';
      axios.get(api).then(response => {
        const data = response.data[0];
        const beer = {
          name: data.name,
          desc: data.description,
          img: data.image_url,
          tips: data.browser_tips,
          tagline: data.tagline,
          food: data.food_pairing };


        // add beer to beers
        this.beers.push(beer);
        // keep adding beers till it fits to viewport
        if (this.isBottomVisible()) {
          this.addBeer();
        }
      });
    } },

  mounted() {
    M.AutoInit();
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.isBottomVisible();
    });
    this.addBeer();
  },
  watch: {
    bottom(newValue) {
      if (newValue) {
        this.addBeer();
      }
    } } };



Vue.createApp(App).mount('#app');