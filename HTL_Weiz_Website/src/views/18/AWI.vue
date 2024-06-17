<template>
  <div>
    <NavBar></NavBar>
    <div class="uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-light hero-imagez">
      <img src="/images/HTL_Page/wide/hero_wi.png" alt="Hero Image" class="zweig-img">
    </div>
    <h1 class="uk-text-lead zweigheading padleftright">Abendschule - Wirtschaftsingeneure</h1>
    <QuickFacts_Abteilungen class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="positiver Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts_Abteilungen>
    <AbteilungsText></AbteilungsText>
    <FooterMerge></FooterMerge>
  </div>
</template>


<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import QuickFacts_Abteilungen from "../../components/QuickFacts_Abteilungen.vue";
import AbteilungsText from "../../components/AbteilungsText.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: 'AWI',
  components: {
    NavBar,
    QuickFacts_Abteilungen,
    AbteilungsText,
    Footer,
  },
};
</script>

<style>

</style>


