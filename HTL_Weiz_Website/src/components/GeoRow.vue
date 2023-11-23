<template>
  <div class="uk-grid-large uk-flex-center" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500" uk-grid>
    <button class="" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500" href="https://verkehrsauskunft.verbundlinie.at/"><img src="/src/assets/images/bbb_logo.svg"></button>
    <button class="" uk-tooltip="title: Standort HTL Weiz; delay: 500" href="https://www.google.com/maps?ll=47.22529,15.621008&z=15&t=m&hl=de-DE&gl=US&mapclient=embed&q=Dr.-Karl-Widdmann-Stra%C3%9Fe+40+8160+Weiz"><img src="/src/assets/images/bbb_logo.svg"></button>
  </div>
</template>

<script lang="ts">

export default {
  name: 'GeoRow',
  components: {
  },
};
</script>

<style>
/* Styles for this component */
</style>
