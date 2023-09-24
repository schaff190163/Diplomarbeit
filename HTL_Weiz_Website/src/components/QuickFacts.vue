<template>
  <div>
    <table class="uk-table">
      <tbody>
        <tr>
          <th>Typ:</th>
          <td>{{ typ }}</td>
        </tr>
        <tr>
          <th>Dauer:</th>
          <td>{{ dauer }}</td>
        </tr>
        <tr>
          <th>Abschluss:</th>
          <td>{{ abschluss }}</td>
        </tr>
        <tr>
          <th>Voraussetzungen:</th>
          <td>{{ vorraussetzungen }}</td>
        </tr>
        <tr>
          <th>Standort:</th>
          <td>{{ standort }}</td>
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
table.uk-table tbody tr {
  display: table-row;
  text-align: left;
}

table.uk-table tbody tr th {
  width: auto;
  text-align: left;
}

table.uk-table tbody tr td {
  width: auto;
  text-align: left;
}

/* New styling for screens 640px and below */
@media (max-width: 640px) {
  table.uk-table tbody tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  table.uk-table tbody tr th {
    width: 40%;
    text-align: left;
  }

  table.uk-table tbody tr td {
    width: 60%;
    text-align: right;
  }
}
</style>


