<template>
  <div class="uk-grid-large padleftright padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" uk-grid>
  <SmallCard class="uk-width-expand" uk-tooltip="title: Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Mint Gütesiegel" imgsrc="/public/images/mint.jpg"></SmallCard>
  <SmallCard class="uk-width-expand" uk-tooltip="title: Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Umweltzeichen" imgsrc="/public/images/umwelt.jpg"></SmallCard>
  <SmallCard class="uk-width-expand" uk-tooltip="title: Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Erasmus+ Projektschule" imgsrc="/public/imageserasmus.jpg"></SmallCard>
  <SmallCard class="uk-width-expand" uk-tooltip="title: Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet.; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom" azname="Innovativste Schule" imgsrc="/public/images/inno.jpg"></SmallCard>
  <SmallCard class="uk-width-expand" uk-tooltip="title: S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote; delay: 500" uk-scrollspy-class="uk-animation-slide-bottom-medium" azname="Förderangebote" imgsrc="/public/images/förder.png"></SmallCard>
  </div>
</template>

<script lang="ts">
import SmallCard from './SmallCard.vue';

export default {
  name: 'AuszeichnungsRow',
  components: {
    SmallCard,
  },
};
</script>

<style>
/* Styles for this component */
</style>
