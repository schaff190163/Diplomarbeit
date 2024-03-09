<template>
  <div class="azgrid padleftright padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" uk-grid>
  <SmallCard uk-tooltip="title: Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Mint Gütesiegel" imgsrc="/images/mint.jpg"></SmallCard>
  <SmallCard uk-tooltip="title: Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Umweltzeichen" imgsrc="/images/umwelt.jpg"></SmallCard>
  <SmallCard uk-tooltip="title: Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Erasmus+ Projektschule" imgsrc="/images/erasmus.jpg"></SmallCard>
  <SmallCard uk-tooltip="title: Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom" azname="Innovativste Schule" imgsrc="/images/inno.jpg"></SmallCard>
  <SmallCard uk-tooltip="title: S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Förderangebote" imgsrc="/images/förder.png"></SmallCard>
  </div>
</template>

<script lang="ts">
import SmallCard from './Card_Small.vue';

export default {
  name: 'Row_Auszeichnungen',
  components: {
    SmallCard,
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
