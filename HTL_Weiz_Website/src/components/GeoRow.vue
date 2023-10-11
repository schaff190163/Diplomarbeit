<template>
  <div class="uk-grid-large uk-flex-center" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500" uk-grid>
    <button class="" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500" href="https://verkehrsauskunft.verbundlinie.at/"><img src="src\assets\images\bbb_logo.svg"></button>
    <button class="" uk-tooltip="title: Standort HTL Weiz; delay: 500" href="https://www.google.com/maps?ll=47.22529,15.621008&z=15&t=m&hl=de-DE&gl=US&mapclient=embed&q=Dr.-Karl-Widdmann-Stra%C3%9Fe+40+8160+Weiz"><img src="src\assets\images\bbb_logo.svg"></button>
  </div>
</template>

<template>
  <div class="uk-grid-large padtopbot padleftright" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500"
    uk-grid>
    <AuszeichnungsCard class="uk-width-expand"
      uk-tooltip="title: Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet; delay: 500"
      uk-scrollspy-class="uk-animation-slide-bottom" azname="Mint Gütesiegel" imgsrc="src/assets/images/mint.jpg">
    </AuszeichnungsCard>
    <AuszeichnungsCard class="uk-width-expand"
      uk-tooltip="title: Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen.; delay: 500"
      uk-scrollspy-class="uk-animation-slide-bottom" azname="Umweltzeichen" imgsrc="src/assets/images/umwelt.jpg">
  </AuszeichnungsCard>
  <AuszeichnungsCard class="uk-width-expand"
    uk-tooltip="title: Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt.; delay: 500"
    uk-scrollspy-class="uk-animation-slide-bottom" azname="Erasmus+ Projektschule"
    imgsrc="src/assets/images/erasmus.jpg"></AuszeichnungsCard>
  <AuszeichnungsCard class="uk-width-expand"
    uk-tooltip="title: Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet.; delay: 500"
    uk-scrollspy-class="uk-animation-slide-bottom" azname="Innovativste Schule" imgsrc="src/assets/images/inno.jpg">
  </AuszeichnungsCard>
  <AuszeichnungsCard class="uk-width-expand"
    uk-tooltip="title: S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote; delay: 500"
    uk-scrollspy-class="uk-animation-slide-bottom" azname="Förderangebote" imgsrc="src/assets/images/förder.png">
  </AuszeichnungsCard>
</div></template>

<script lang="ts">

export default {
  name: 'GeoRow',
  components: {
  },
};
</script>

<style>
/* Styles for this component */
</style>
