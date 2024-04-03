<template>
  <div class="azgrid padleftright padbot" uk-grid>
  <Card_Small tooltipdesc="Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet" azname="Mint Gütesiegel" imgsrc="/images/mint.jpg"></Card_Small>
  <Card_Small tooltipdesc="Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen" azname="Umweltzeichen" imgsrc="/images/umwelt.jpg"></Card_Small>
  <Card_Small tooltipdesc="Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt" azname="Erasmus+ Projektschule" imgsrc="/images/erasmus.jpg"></Card_Small>
  <Card_Small tooltipdesc="Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet" azname="Innovativste Schule" imgsrc="/images/inno.jpg"></Card_Small>
  <Card_Small tooltipdesc="S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote" azname="Förderangebote" imgsrc="/images/förder.png"></Card_Small>
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
