<template>
  <div class="padleftright padbot">
  <div class="azgrid" uk-grid uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
  <Card_Small uk-scrollspy-class="uk-animation-slide-bottom-medium" tooltipdesc="Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet" azname="Mint Gütesiegel" imgsrc="/images/HTL_Page/auszeichnungen/mint.png"></Card_Small>
  <Card_Small uk-scrollspy-class="uk-animation-slide-bottom-medium" tooltipdesc="Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen" azname="Umweltzeichen" imgsrc="/images/HTL_Page/auszeichnungen/umwelt.png"></Card_Small>
  <Card_Small uk-scrollspy-class="uk-animation-slide-bottom-medium" tooltipdesc="Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt" azname="Erasmus+ Projektschule" imgsrc="/images/HTL_Page/auszeichnungen/erasmus.png"></Card_Small>
  <Card_Small uk-scrollspy-class="uk-animation-slide-bottom-medium" tooltipdesc="Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet" azname="Innovativste Schule" imgsrc="/images/HTL_Page/auszeichnungen/inno.png"></Card_Small>
  <Card_Small uk-scrollspy-class="uk-animation-slide-bottom-medium" tooltipdesc="S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote" azname="Förderangebote" imgsrc="/images/HTL_Page/auszeichnungen/foerder.png"></Card_Small>
  </div>
  </div>
</template>

<script lang="ts">
import Card_Small from './Card_Small.vue';

export default {
  name: 'Row_Auszeichnungen',
  components: {
    Card_Small,
  },
};
</script>

<style>
/* Styles for this component */
.azgrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: calc(10vw - 40px);
  justify-content: center;
  align-content: center;
}
</style>
