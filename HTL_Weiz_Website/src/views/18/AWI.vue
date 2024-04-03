<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="/images/wi_hero.png" uk-img></div>
    <h1 class="uk-text-lead zweigheading">Abendschule - Wirtschaftsingenieure</h1>
    <QuickFacts class="padleftright" typ="Abendschule für Berufstätige" dauer="6 bzw. 8 Semester" abschluss="Reife- und Diplomprüfung" vorraussetzungen="Reifeprüfung AHS/BHS oder BRP oder Abschlussprüfung einer facheinschlägigen 3,5 oder 4 jährigen Fachschule oder Werkmeisterschule oder LAP" standort="Weiz"></QuickFacts>
    <AbteilungsText></AbteilungsText>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import QuickFacts_Abteilungen from "../../components/QuickFacts_Abteilungen.vue";
import AbteilungsText from "../../components/AbteilungsText.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: 'AwiView',
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
