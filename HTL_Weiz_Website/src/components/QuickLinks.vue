<template>
    <div class="uk-grid-large padtop padbot padleftright qldiv" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500"
        uk-grid>
        <SmallCard class="uk-width-expand"
            uk-tooltip="title: Die HTL Weiz ist mit dem MINT Gütesiegel ausgezeichnet; delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom" azname="Mint Gütesiegel" imgsrc="src/assets/images/mint.jpg">
        </SmallCard>
        <div class="separator"><hr class="uk-divider-vertical"></div>
        <SmallCard class="uk-width-expand"
            uk-tooltip="title: Die HTL Weiz führt seit 2002 das österreichische Umweltzeichen.; delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom" azname="Umweltzeichen" imgsrc="src/assets/images/umwelt.jpg">
        </SmallCard>
        <div class="separator"><hr class="uk-divider-vertical"></div>
        <SmallCard class="uk-width-expand"
            uk-tooltip="title: Die HTL Weiz ist regelmäßig an Erasmus+ Projekten beteiligt.; delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom" azname="Erasmus+ Projektschule"
            imgsrc="src/assets/images/erasmus.jpg">
        </SmallCard>
        <div class="separator"><hr class="uk-divider-vertical"></div>
        <SmallCard class="uk-width-expand"
            uk-tooltip="title: Die HTL Weiz wurde wiederholt mit dem Titel Innovativste Schule der Steiermark ausgezeichnet.; delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom" azname="Innovativste Schule" imgsrc="src/assets/images/inno.jpg">
        </SmallCard>
        <div class="separator"><hr class="uk-divider-vertical"></div>
        <SmallCard class="uk-width-expand"
            uk-tooltip="title: S-6.1b COVID-19 - Unterrichtsbezogene Förderangebote; delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom" azname="Förderangebote" imgsrc="src/assets/images/förder.png">
        </SmallCard>
    </div>
</template>

<script lang="ts">
import SmallCard from './SmallCard.vue';

export default {
    name: 'QuickLinks',
    components: {
        SmallCard,
    },
};
</script>

<style>/* Styles for this component */
.qldiv {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>