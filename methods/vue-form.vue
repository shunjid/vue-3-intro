<!-- Demo: https://cdpn.io/_shunjid/debug/RwRqRXa/gakeYdORJoNk -->
<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          required
          @input="validateForm"
        />
      </div>
      <div>
        <label for="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          @input="validateForm"
        />
      </div>
      <div>
        <label for="name">Bio</label>
        <textarea
          type="text"
          name="bio"
          id="bio"
          v-model="bio"
          required
        ></textarea>
      </div>
      <button id="submit" @click="submitForm">Submit</button>
      <div>
        <h3>Response from server:</h3>
        <pre>{{ response }}</pre>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      bio: "",
      response: "",
    };
  },
  methods: {
    validateForm() {
      const buttonClass = document.getElementById("submit").classList;
      this.isReadyToSubmit()
        ? buttonClass.add("active")
        : buttonClass.remove("active");
    },
    submitForm() {
      if (this.isReadyToSubmit()) {
        axios
          .post("//jsonplaceholder.typicode.com/posts", {
            name: this.name,
            email: this.email,
            caps: this.bio,
          })
          .then((response) => {
            this.response = JSON.stringify(response, null, 2);
          })
          .catch((error) => {
            this.response = "Error: " + error.response.status;
          });
      } else {
          alert('Please fillup the form correctly');
      }
    },
    isReadyToSubmit() {
      return this.name.length >= 4 && this.isValidEmail(this.email);
    },
    isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: "Work Sans", sans-serif;
}
form {
  width: 300px;
  padding: 10px 40px;
}
form label {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.03em;
  font-weight: bold;
}
form input,
form textarea {
  border: 1px solid #ccc;
  color: #333;
  width: calc(100% - 30px);
}
form input,
form textarea,
form button {
  border-radius: 4px;
  padding: 8px 15px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
}
form div {
  margin: 20px 0;
}
button {
  color: white;
  border: none;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #ccc;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
}
button:hover {
  transform: translateY(2px);
}
.active {
  background: #5968d7;
}
pre-content {
  width: 300px;
}
</style>