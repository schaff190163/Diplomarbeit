<template>
  <div class="padtop padbot padleftright" uk-grid>
      <div class="uk-card uk-card-body bbbgmcard roundedl uk-container" @click="sendToBBB" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500">
          <img src="/images/bbb_logo.png" class="uk-position-right logopad" alt="BusBahnBim Routenplaner">
      </div>
      <div class="uk-card uk-card-body bbbgmcard roundedl uk-container" @click="sendToGM" uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500">
          <img src="/images/gm_logo.svg" class="uk-position-left logopad" alt="BusBahnBim Routenplaner">
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Row_BBB_GM',
  methods: {
      sendToBBB() {
          window.location.href = "https://verkehrsauskunft.verbundlinie.at/";
      },
      sendToGM() {
          window.location.href = "https://maps.app.goo.gl/MaLAxwLRAYybfFHq9";
      },
  },
};
</script>

<style scoped>
.bbbgmcard{
  height: 10px;
}
</style>
