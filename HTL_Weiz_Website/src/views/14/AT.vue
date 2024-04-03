<template>
  <div class="uk-background-muted ">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="/images/at_hero.png" uk-img></div>
    <h1 class="uk-text-lead zweigheading">Maschinenbau - Automatisierungstechnik</h1>
    <QuickFacts_Abteilungen class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="positiver Abschluss der 8. Schulstufe" standort="Fürstenfeld"></QuickFacts_Abteilungen>
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
  name: 'AT',
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
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}
@media (max-width: 640px) {
  .zweigheading {
  font-size: 30px;
  padding-left: 35px;
  }
}
</style>
