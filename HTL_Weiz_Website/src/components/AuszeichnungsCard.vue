<template>
  <div class="uk-card uk-card-default uk-width-1-1 rounded">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle " uk-grid>
        <div class="uk-width-auto">
          <img class="uk-card-media-top" width="40" height="40" :src="imgsrc">
        </div>
        <h3 class="uk-card-title"> {{ azname }} </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'AuszeichnungsCard',
    props: {
    imgsrc: String,
    azname: String,
  },
  components: {
    /*,*/
  },
};
</script>

<style>
/* Styles for this component */
.rounded {
  border-radius: 20px;
  /* Adjust the value as needed */
}
</style>
