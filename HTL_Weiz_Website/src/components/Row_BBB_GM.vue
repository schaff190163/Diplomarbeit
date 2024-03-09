<template>
  <div>
    <div class="padleftright padbot padtop uk-child-width-expand@s">
    <ul class="uk-list uk-list-collapse">
      <li>
        <img src="/images/bbb_logo.png" alt="BusBahnBim Logo" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500"
          href="https://verkehrsauskunft.verbundlinie.at/" class="geoimg">
      </li>
    </ul>
    </div>
    <ul class="uk-list uk-list-collapse">
      <li>
        <img src="/images/gm_logo.svg" alt="Google Maps" uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500"
          href="https://maps.app.goo.gl/MaLAxwLRAYybfFHq9"
          class="geoimg">
      </li>
    </ul>
  </div>
</template>

<style>
.geoimg {
  width: calc(35% + 60px);
  height: auto;
  max-height: 50px;
}
</style>

<script lang="ts">
export default {
  name: 'Row_BBB_GM',
};
</script>
