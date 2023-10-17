<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/src/assets/images/wi_hero.png" uk-img></div>
    <h1 class="uk-text-lead zweigheading">Wirtschaftsingenieure</h1>
    <QuickFacts class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts>
    <AbteilungsText></AbteilungsText>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import QuickFacts from "@/components/QuickFacts.vue";
import AbteilungsText from "@/components/AbteilungsText.vue";
import AvCard from "@/components/AvCard.vue";
import FooterMerge from "@/components/FooterMerge.vue";

export default {
  name: 'WiView',
  components: {
    NavBar,
    QuickFacts,
    AbteilungsText,
    AvCard,
    FooterMerge,
  },
  data() {
    return {
      isInitialLoad: true,
    };
  },
  mounted() {
    // Check if it's the initial load
    if (this.isInitialLoad) {
      // Disable transitions during the initial load
      this.disableTransitions();
    }
  },
  methods: {
    disableTransitions() {
      // Your logic to disable transitions
      // This might involve setting CSS classes or manipulating the DOM
      // You can, for example, add a class to your main container to disable transitions
      this.isInitialLoad = false; // Mark the initial load as complete
    },
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
