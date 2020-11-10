<!-- Demo: https://cdpn.io/_shunjid/debug/abZReVO/gaMeYdOWgRPM -->
<template>
  <div id="app">
    <ul>
      <li v-for="num in range" :key="num">Scout Group-{{ num }}</li>
    </ul>

    <table>
      <tr>
        <th>Teams</th>
        <th>Country</th>
        <th>Captain</th>
      </tr>
      <tr v-for="(country, index) in countries" :key="country.name">
        <td>Team-{{ index + 1 }}</td>
        <td>{{ country.name }}</td>
        <td>{{ country.captain }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        {
          name: "🇧🇩",
          captain: "Mashrafe Mortaza",
        },
        {
          name: "🇮🇳",
          captain: "Virat Kohli",
        },
        {
          name: "🇵🇰",
          captain: "Azhar Ali",
        },
        {
          name: "🇱🇰",
          captain: "Dimuth Karunaratne",
        },
        {
          name: "🇦🇫",
          captain: "Rashid Khan",
        },
      ],
    };
  },
};
</script>

<style>
    table {
      width: 100%
    }
    table,
    th {
        border: 1px solid black;
    }
    table,
    th,
    td {
        text-align: center;
    }
</style>