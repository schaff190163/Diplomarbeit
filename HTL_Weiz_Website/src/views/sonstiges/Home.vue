<template>
  <!-- Main container -->
  <div>

    <!-- Navigation bar component -->
    <NavBar></NavBar>

    <!-- Hero section -->
    <Hero_Home></Hero_Home>

    <!-- School statistics section -->
    <SchoolStats></SchoolStats>

    <!-- Education opportunities section -->
    <div>
      <h1 class="padleftright mpheading padtop">
        <span class="uk-text-light">Ausbildungsmöglichkeiten</span>
      </h1>
      <!-- Grid container for education cards with scrollspy animation -->
      <div class="grid-container padleftright padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
        <!-- Education card components -->
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Wirtschaftsingineure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_wi_250.png" detailsrc="/wi"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Elektrotechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_et_250.png" detailsrc="/et"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Informationstechnologie" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_it_250.png" detailsrc="/it"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschienenbau - Anlagentechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_mb_250.png" detailsrc="/mb"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Automatisierungstechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_at_250.png" detailsrc="/at"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Umwelttechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_ut_250.png" detailsrc="/ut"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Fachschule - Mechatronik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_mt_250.png" detailsrc="/mt"></Card_Abteilungen>
        <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Abendschule - Wirtschaftsingenieure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc="/images/logo_wi_250.png" detailsrc="/awi"></Card_Abteilungen>
      </div>
    </div>

    <!-- Temporary events section -->
    <TemporaryEvents></TemporaryEvents>

    <!-- Quick links section -->
    <QuickLinks_Home></QuickLinks_Home>

    <!-- Calendar section -->
    <Kalender></Kalender>

    <!-- Footer component -->
    <Footer></Footer>

  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

// Set metadata
useHead({
  title: 'Home - HTL Weiz',
  meta: [
    { name: 'description', content: 'Discover the various educational opportunities and events at HTL Weiz.' },
    { name: 'keywords', content: 'HTL Weiz, education, opportunities, events' }
  ]
});

// Import components
import NavBar from "../../components/NavBar.vue";
import Card_Abteilungen from "../../components/Card_Abteilungen.vue";
import Hero_Home from "../../components/Hero_Home.vue";
import Kalender from "../../components/Kalender.vue";
import SchoolStats from "../../components/SchoolStats.vue";
import Footer from "../../components/Footer.vue";
import QuickLinks_Home from "../../components/QuickLinks_Home.vue";
import TemporaryEvents from "../../components/TemporaryEvents.vue";
import Row_BBB_GM from "../../components/Row_BBB_GM.vue";
</script>

<style>
/* Component-specific styles */
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
