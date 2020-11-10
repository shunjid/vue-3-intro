<!-- Demo: https://cdpn.io/_shunjid/debug/YzWRWKB/PBrNWRKgKbWA -->
<template>
  <div id="app">
    <img
      class="main-photo"
      src="https://i.pinimg.com/originals/d0/36/76/d036769bc3b2218b0b5bb3cba67174f6.jpg"
    />
    <img
      class="main-profile"
      src="https://pbs.twimg.com/profile_images/1312344170669854721/AAMnU42t_400x400.jpg"
    />

    <div class="main-info">
      <span class="name">Shunjid Rahman Showrov</span>
      <h3>"I love this place so much"</h3>
    </div>
    <hr />

    <ul>
      <li v-for="comment in allComments" :key="comment">{{ comment }}</li>
    </ul>

    <input
      @keyup.enter="addNewComment"
      v-model="newComment"
      placeholder="Add a comment"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: "",
      allComments: [
        "Where are you?",
        "Wow!",
        "Seriously man? You are travelling?",
      ],
      emojis: {
        "<3": "❤️",
        ":O": "😮",
        ":o": "😮",
        "xD": "😁",
        ":-)": "🙂",
        ":)": "🙂",
        "(:": "🙃",
      },
    };
  },
  methods: {
    addNewComment() {
      Object.keys(this.emojis).map((code) => {
        this.newComment = this.newComment.replaceAll(code, this.emojis[code]);
      });
      this.allComments.push(this.newComment);
      this.newComment = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Google+Sans&display=swap");

body {
  font-family: "Google Sans", serif;
  background-color: #000000;
}
#app {
  background: #212121;
  color: #fff;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 60px;
  width: 370px;
  margin: 0 auto;
  display: table;
  padding: 20px;
  line-height: 1.4em;
}
.name {
  color: #ccc;
}
small {
  color: #bbb;
  font-size: 10px;
}
h3 {
  margin: 5px 0 4px;
}
.main-photo {
  width: 300px;
}
.main-profile {
  float: left;
  border: 3px solid white;
  margin: -25px 0 0 20px;
  position: relative;
  width: 80px;
}
.main-info {
  float: left;
  padding: 10px 20px;
  text-align: left;
  margin-bottom: 15px;
}
.main-info:after {
  content: "";
  display: table;
  clear: both;
}
li {
  list-style: none outside none;
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid #555;
}
ul {
  margin: 0;
  padding: 0 35px;
}
hr {
  margin: 75px 0 0 32px;
  width: 300px;
  border-top: 0;
  border-bottom: 1px solid #555;
}
input {
  font-family: "Playfair Display", serif;
  width: 280px;
  margin: 30px 0;
  padding: 8px 10px;
  outline: 0;
}
</style>