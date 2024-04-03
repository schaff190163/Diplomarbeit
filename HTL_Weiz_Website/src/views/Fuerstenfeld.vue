<template>
  <div class="uk-background-muted">
    <FNavBar></FNavBar>
    <FHeroSection></FHeroSection>
    <div class="gradient_f">
      <FSchoolStats></FSchoolStats>
    </div>
    <h1 class="padleftright uk-text-light padbot">Maschinenbau - Automatisierungstechnik</h1>
    <div class="grid-container padleftright padbot uk-padding-small" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 50">
      <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-small" title="Inhaltliche Schwerpunkte" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_at_250.png" detailsrc="/at"></Card_Abteilungen>
      <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-small" title="Persönliche Eigenschaften" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_at_250.png" detailsrc="/at"></Card_Abteilungen>
      <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-small" title="Karriereaussichten" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_at_250.png" detailsrc="/at"></Card_Abteilungen>
    </div>
    <Footer class="padtop"></Footer>
  </div>
</template>

<script lang="ts">
import Card_Abteilungen from "../components/Card_Abteilungen.vue";
import Footer from "../components/fuerstenfeld/FFooter.vue";
import FHeroSection from "../components/fuerstenfeld/FHeroSection.vue"
import FNavBar from "../components/fuerstenfeld/FNavBar.vue";
import FSchoolStats from "../components/fuerstenfeld/FSchoolStats.vue";

export default {
  name: 'HomeView',
  components: {
    FNavBar,
    Card_Abteilungen,
    FHeroSection,
    FSchoolStats,
    Footer,
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
}


@media (max-width: 1300px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 880px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
}
</style>
