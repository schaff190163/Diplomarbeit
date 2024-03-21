<template>
  <div class="uk-background-muted">
    <FNavBar></FNavBar>
    <FHeroSection></FHeroSection>
    <div class="gradient_f">
      <FSchoolStats></FSchoolStats>
    </div>
    <h1 class="padleftright uk-text-light padbot">Maschinenbau - Automatisierungstechnik</h1>
    <div class="grid-container padleftright padbot uk-padding-small" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
    <FAbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Inhaltliche Schwerpunkte" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_at_250.png" detailsrc = "/at"></FAbteilungsCard>
    <FAbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Persönliche Eigenschaften" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_at_250.png" detailsrc = "/at"></FAbteilungsCard>
    <FAbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Karriereaussichten" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_at_250.png" detailsrc = "/at"></FAbteilungsCard>
    </div>
    <Footer class="padtop"></Footer>
  </div>
</template>
<script lang="ts">
import FNavBar from "../components/fuerstenfeld/FNavBar.vue";
import FAbteilungsCard from "../components/fuerstenfeld/FAbteilungsCard.vue";
import FHeroSection from "../components/fuerstenfeld/FHeroSection.vue"
import Calendar from "../components/Calendar.vue";
import FSchoolStats from "../components/fuerstenfeld/FSchoolStats.vue";
import Footer from "../components/fuerstenfeld/FFooter.vue";
import QuickLinks from "../components/QuickLinks.vue";

export default {
  name: 'HomeView',
  components: {
    FNavBar,
    FAbteilungsCard,
    FHeroSection,
    Calendar,
    FSchoolStats,
    Footer,
    QuickLinks,
  },
};
</script>

<style>
/* Styles for this component */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
}

.gradient_f {
  /*background-image: url('/images/gradient.svg');*/
  background-color: #4B96D1;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
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
