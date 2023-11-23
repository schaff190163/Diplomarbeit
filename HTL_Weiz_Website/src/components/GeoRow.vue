<template>
  <div class="padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500" uk-grid>
    <img src="/src/assets/images/bbb_logo.svg" alt="BusBahnBim Logo" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500" href="https://verkehrsauskunft.verbundlinie.at/" class="geoimg">
    <img src="/src/assets/images/gm_logo.svg" alt="Google Maps" uk-tooltip="title: Standort HTL Weiz; delay: 500" href="https://www.google.com/maps?ll=47.22529,15.621008&z=15&t=m&hl=de-DE&gl=US&mapclient=embed&q=Dr.-Karl-Widdmann-Stra%C3%9Fe+40+8160+Weiz" class="geoimg">
  </div>
</template>

<script lang="ts">
export default {
  name: 'GeoRow',
  components: {},
};
</script>

<style>
/* Styles for this component */
.geoimg {
  width: 300px;
}
</style>
