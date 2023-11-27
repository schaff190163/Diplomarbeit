<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <div class="lape">
      <SchoolStats></SchoolStats>
      <h1 class="head padleftright uk-text-light padbot">Ausbildungsmöglichkeiten an der HTL Weiz</h1>
    <div class="grid-container padleftright padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Wirtschaftsingineure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_wi_250.png" detailsrc = "/wi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Elektrotechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_et_250.png" detailsrc = "/et"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Informationstechnologie" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_it_250.png" detailsrc = "/it"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Abendschule - Wirtschaftsingenieure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_wi_250.png" detailsrc = "/awi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschienenbau - Anlagentechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_mb_250.png" detailsrc = "/mb"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Automatisierungstechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_at_250.png" detailsrc = "/at"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Umwelttechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_ut_250.png" detailsrc = "/ut"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Fachschule - Mechatronik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/public/images/logo_mt_250.png" detailsrc = "/mt"></AbteilungsCard>
    </div>
    </div>
    <Calendar></Calendar>
    <FooterMerge></FooterMerge>
  </div>
</template>
<script lang="ts">
import NavBar from "../components/NavBar.vue";
import AbteilungsCard from "../components/AbteilungsCard.vue";
import HeroSection from "../components/HeroSection.vue"
import Calendar from "../components/Calendar.vue";
import SchoolStats from "../components/SchoolStats.vue";
import FooterMerge from "../components/FooterMerge.vue";
import QuickLinks from "../components/QuickLinks.vue";

export default {
  name: 'HomeView',
  components: {
    NavBar,
    AbteilungsCard,
    HeroSection,
    Calendar,
    SchoolStats,
    FooterMerge,
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

.head {
  text-align: center;
  color: #F8F8F8;
  margin: 0 !important;
}

.lape {
  background-image: url('/public/images/laype.svg');
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
