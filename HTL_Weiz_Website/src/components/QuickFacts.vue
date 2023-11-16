<template>
  <div>
    <table class="uk-table uk-table-divider qfbig">
      <thead>
          <tr>
              <th>Typ:</th>
              <th>Dauer:</th>
              <th>Abschluss:</th>
              <th>Vorraussetzungen:</th>
              <th>Standort:</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>{{ typ }}</td>
              <td>{{ dauer }}</td>
              <td>{{ abschluss }}</td>
              <td>{{ vorraussetzungen }}</td>
              <td>{{ standort }}</td>
          </tr>
      </tbody>
  </table>
  <table class="uk-table uk-table-divider qfsmall">
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
              <th>Vorraussetzungen:</th>
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
@media (max-width: 740px) {
  .qfbig{
    display: none;
  }
}

@media (min-width: 740px) {
  .qfsmall{
    display: none;
  }
}
</style>


