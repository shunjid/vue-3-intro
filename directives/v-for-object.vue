<!-- Demo: https://cdpn.io/_shunjid/debug/MWezgmK/XxrVwKZbpRxA -->
<template>
  <div id="app">
    <div v-for="(quiz, quizIndex) in quizzes" :key="quiz.question">
      <p v-for="(value, key, index) in quiz" :key="value">
        <b>{{ quizIndex + 1 }}.{{ index + 1 }} {{ key.toUpperCase() }}: </b>
        {{ value }}
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizzes: [
        {
          question: "What is the capital of Bangladesh?",
          answer: "Dhaka",
          marks: 5,
        },
        {
          question:
            "Who is the 46th president of the United States of America?",
          answer: "Sir Joe Biden",
          marks: 10,
        },
        {
          question: "Where was COVID-19 found first?",
          answer: "Wuhan, China",
          marks: 2,
        },
      ],
    };
  },
};
</script>