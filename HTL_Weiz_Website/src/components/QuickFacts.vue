<template>
  <div>
    <table class="uk-table">
      <thead>
          <tr>
              <th>Typ</th>
              <th>Dauer</th>
              <th>Abschluss</th>
              <th>Vorraussetzungen</th>
              <th>Standort</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>{{typ}}</td>
              <td>{{dauer}}</td>
              <td>{{abschluss}}</td>
              <td>{{vorraussetzungen}}</td>
              <td>{{standort}}</td>
          </tr>
      </tbody>
  </table>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'QuickFacts',
  components: {
    /*,*/
  },
  props: {
    typ: {
      type: String,
      required: true,
    },
    dauer: {
      type: String,
      required: true,
    },
    abschluss: {
      type: String,
      required: true,
    },
    vorraussetzungen: {
      type: String,
      required: true,
    },
    standort: {
      type: String,
      required: true,
    }
  },
};
</script>

<style>
</style>
