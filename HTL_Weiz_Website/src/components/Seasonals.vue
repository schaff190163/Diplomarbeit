<template>
  <div class="padleftright padbot">
    <h2 class="seasonalsstyle">{{stext}}</h2>
    <button class="uk-button uk-button-default seasonalsstyle sbutton rounded">{{sbuttontext}}</button>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'Seasonals',
  components: {
    /*,*/
  },
  props: {
    stext: {
      type: String,
      required: true,
    },
    sbuttontext: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/* Styles for this component */
.seasonalsstyle{
  color: #F8F8F8;
}
.sbutton{
  align-content: left;
}
</style>
