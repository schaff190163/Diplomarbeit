<template>
  <div>
    <div class="geoalign padleftright padtop padbot">
      <div class="geoimg-container">
        <img src="/images/bbb_logo.png" alt="BusBahnBim Logo" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500"
          href="https://verkehrsauskunft.verbundlinie.at/" class="geoimg">
      </div>
      <div class="geoimg-container">
        <img src="/images/gm_logo.svg" alt="Google Maps" uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500"
          href="https://maps.app.goo.gl/MaLAxwLRAYybfFHq9"
          class="geoimg">
      </div>
    </div>
  </div>
</template>

<style>
.geoalign {
  display: flex;
  justify-content: center;
}

.geoimg-container {
  margin: 0 0 0 0;
}

.geoimg {
  width: calc(35% + 60px);
  height: auto;
}

@media (max-width:750px) {
  .geoalign{
    flex-direction: column;
    align-items: center;
  }
}
</style>

<script lang="ts">
export default {
  name: 'Row_BBB_GM',
};
</script>
