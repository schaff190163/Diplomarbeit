<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="/src/assets/images/it_hero.png" uk-img>
    </div>
    <h1 class="uk-text-lead zweigheading">Informationstechnologie</h1>
    <QuickFacts class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts>
    <AbteilungsText></AbteilungsText>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import QuickFacts from "@/components/QuickFacts.vue";
import AbteilungsText from "@/components/AbteilungsText.vue";
import AvCard from "@/components/AvCard.vue";

export default {
  name: 'ItView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    QuickFacts,
    AbteilungsText,
    AvCard,
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
