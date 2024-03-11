<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <Hero_Home></Hero_Home>
    <div class="gradient">
      <SchoolStats></SchoolStats>
    </div>
    <h1 class="padleftright uk-text-light padbot mpheading">Ausbildungsmöglichkeiten an der HTL Weiz</h1>
    <div class="grid-container padleftright padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Wirtschaftsingineure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_wi_250.png" detailsrc = "/wi"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Elektrotechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_et_250.png" detailsrc = "/et"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Informationstechnologie" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_it_250.png" detailsrc = "/it"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschienenbau - Anlagentechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_mb_250.png" detailsrc = "/mb"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Automatisierungstechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_at_250.png" detailsrc = "/at"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Maschinenbau - Umwelttechnik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_ut_250.png" detailsrc = "/ut"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Fachschule - Mechatronik" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_mt_250.png" detailsrc = "/mt"></Card_Abteilungen>
    <Card_Abteilungen uk-scrollspy-class="uk-animation-slide-bottom-medium" title="Abendschule - Wirtschaftsingenieure" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed..." imgsrc = "/images/logo_wi_250.png" detailsrc = "/awi"></Card_Abteilungen>
    </div>
    <h1 class="padleftright uk-text-light padbot mpheading">Quick Links</h1>
    <QuickLinks_Home></QuickLinks_Home>
    <h1 class="padleftright uk-text-light padbot mpheading">Terminkalender</h1>
    <Kalender></Kalender>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Abteilungen from "../../components/Card_Abteilungen.vue";
import Hero_Home from "../../components/Hero_Home.vue"
import Kalender from "../../components/Kalender.vue";
import SchoolStats from "../../components/SchoolStats.vue";
import Footer from "../../components/Footer.vue";
import QuickLinks_Home from "../../components/QuickLinks_Home.vue";
import Seasonals from "../../components/Seasonals.vue";

export default {
  name: 'Home',
  components: {
    NavBar,
    Card_Abteilungen,
    Hero_Home,
    Kalender,
    SchoolStats,
    Footer,
    QuickLinks_Home,
    Seasonals,
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

.gradient {
  /*background-image: url('/images/gradient.svg');*/
  background-color: #1BA373;
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
