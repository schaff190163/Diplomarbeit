<template>
  <div class="padtop padleftright">
    <div class="uk-grid-small uk-flex-center" uk-grid>
      <div class="uk-card uk-card-body" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500" @click="sendToBBB">
        <img src="/images/bbb_logo.png" style="height: 37px;" alt="BusBahnBim Routenplaner">
      </div>
      <div class="uk-card uk-card-body" uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500" @click="sendToGM">
        <img src="/images/gm_logo.png" style="height: 37px;" alt="Google Maps Standort HTL Weiz">
      </div>
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