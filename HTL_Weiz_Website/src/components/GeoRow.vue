<template>
  <div class="uk-grid-large uk-flex-center padtopbot darkbg" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500" uk-grid>
  <AuszeichnungsCard uk-scrollspy-class="uk-animation-slide-bottom" azname="Mint Gütesiegel" imgsrc="src/assets/images/mint.jpg"></AuszeichnungsCard>
  <AuszeichnungsCard uk-scrollspy-class="uk-animation-slide-bottom" azname="Umweltzeichen" imgsrc="src/assets/images/umwelt.jpg"></AuszeichnungsCard>
  <AuszeichnungsCard uk-scrollspy-class="uk-animation-slide-bottom" azname="Erasmus+ Projektschule" imgsrc="src/assets/images/erasmus.jpg"></AuszeichnungsCard>
  <AuszeichnungsCard uk-scrollspy-class="uk-animation-slide-bottom" azname="Innovativste Schule" imgsrc="src/assets/images/inno.jpg"></AuszeichnungsCard>
  <AuszeichnungsCard uk-scrollspy-class="uk-animation-slide-bottom" azname="Förderangebote" imgsrc="src/assets/images/förder.png"></AuszeichnungsCard>
  </div>
</template>

<script lang="ts">
import AuszeichnungsCard from './AuszeichnungsCard.vue';

export default {
  name: 'GeoRow',
  components: {
    AuszeichnungsCard,
  },
};
</script>

<style>
/* Styles for this component */
</style>
