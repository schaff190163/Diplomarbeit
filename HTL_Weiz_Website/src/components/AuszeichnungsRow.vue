<template>
  <div class="uk-grid-large uk-flex-center uk-width-auto@m padtopbot padleftright" uk-grid>
    <AuszeichnungsCard azname="Mint Gütesiegel" imgsrc="src/assets/images/mint.jpg"></AuszeichnungsCard>
    <AuszeichnungsCard azname="Umweltzeichen" imgsrc="src/assets/images/umwelt.jpg"></AuszeichnungsCard>
    <AuszeichnungsCard azname="Erasmus+ Projektschule" imgsrc="src/assets/images/erasmus.jpg"></AuszeichnungsCard>
    <AuszeichnungsCard azname="Innovativste Schule" imgsrc="src/assets/images/inno.jpg"></AuszeichnungsCard>
    <AuszeichnungsCard azname="Förderangebote" imgsrc="src/assets/images/förder.png"></AuszeichnungsCard>
  </div>
</template>

<script lang="ts">
import AuszeichnungsCard from './AuszeichnungsCard.vue';

export default {
  name: 'AuszeichnungsRow',
  components: {
    AuszeichnungsCard,
  },
};
</script>

<style>
/* Styles for this component */
</style>
