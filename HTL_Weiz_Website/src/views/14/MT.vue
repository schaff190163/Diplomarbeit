<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="/public/images/mt_hero.png" uk-img></div>
    <h1 class="uk-text-lead zweigheading">Fachschule - Mechatronik</h1>
    <QuickFacts class="padleftright" typ="Fachschule" dauer="3,5 Jahre" abschluss="Diplomprüfung" vorraussetzungen="positiver Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts>
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
  name: 'MT',
  components: {
    NavBar,
    QuickFacts_Abteilungen,
    AbteilungsText,
    Footer,
  },
};
</script>

<style>
.zweigheading {
  font-size: 40px;
  padding-left: 100px;
}
@media (max-width: 640px) {
  .zweigheading {
  font-size: 30px;
  padding-left: 35px;
  }
}
</style>
