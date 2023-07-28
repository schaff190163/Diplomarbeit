<template>
  <div class="uk-card uk-card-default uk-width-1-1 rounded">
      <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle " uk-grid>
              <div class="uk-width-auto">
                  <img class="" width="40" height="40" src="/src/assets/images/logo_wi_250.png">
              </div>
              <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">Wirschaftsingineure</h3>
              </div>
          </div>
      </div>
      <div class="uk-card-body">
          <p>Die Wirtschaft braucht  Persönlichkeiten, die sowohl den Markt als auch die Produkte von morgen mitgestalten. Hierfür sind folgende Anforderungen...
          </p>
      </div>
      <div class="uk-card-footer">
          <a href="#" class="uk-button uk-button-text">Details</a>
      </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'AbteilungsCard',
  components: {
    /*,*/
  },
};
</script>

<style>
/* Styles for this component */
.rounded {
  border-radius: 20px; /* Adjust the value as needed */
}
</style>
