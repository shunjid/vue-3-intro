<template>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key.toUpperCase() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, entryIndex) in ratingsInfo" :key="entryIndex">
          <td v-for="key in columns" :key="entry[key]">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
</template>