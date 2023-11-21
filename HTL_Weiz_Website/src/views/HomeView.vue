<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <div class="lape">
      <QuickLinks></QuickLinks>
      <h1 class="head padleftright">Ausbildungsmöglichkeiten an der HTL Weiz</h1>
    <div class="grid-container padleftright padtop padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Wirtschaftsingineure" description="Die Wirtschaft braucht Persönlichkeiten, die sowohl den Markt als auch die Produkte von morgen mitgestalten. Hierfür sind folgende Anforderungen..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/wi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Elektrotechnik" description="Die Bedeutung der Elektrotechnik ist mittlerweile in allen Bereichen der Industrie,  der Wirtschaft und im Bereich Dienstleistungen sehr groß geworden..." imgsrc = "/src/assets/images/logo_et_250.png" detailsrc = "/et"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Informationstechnologie" description="Die Informationstechnologie stellt das Bindeglied zwischen Benutzer und Maschine sowie Mensch und Technik dar. Sie steht damit auch zwischen der..." imgsrc = "/src/assets/images/logo_it_250.png" detailsrc = "/it"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Abendschule - Wirtschaftsingenieure" description="Ein vielfältiges Bildungsprogramm für Berufstätige bietet die „Abendschule“ der HTL Weiz mit der Fachrichtung „WIRTSCHAFSTINGENIEURE - ..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/awi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschienenbau - Anlagentechnik" description="Nahezu alle Produkte in unserem Alltag werden mit Maschinen hergestellt. So unterschiedlich diese Maschinen auch sein mögen, die technischen..." imgsrc = "/src/assets/images/logo_mb_250.png" detailsrc = "/mb"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschinenbau - Automatisierungstechnik" description="Unter Automatisierungstechnik versteht man das Zusammenspiel und Ineinandergreifen von Maschinenbau und Elektrotechnik. Ziel ist es, ..." imgsrc = "/src/assets/images/logo_at_250.png" detailsrc = "/at"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschinenbau - Umwelttechnik" description="Umwelttechniker/innen messen und untersuchen Schadstoffe. Basierend auf den daraus gewonnenen Erkenntnissen suchen sie nach Lösungen, um..." imgsrc = "/src/assets/images/logo_ut_250.png" detailsrc = "/ut"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Fachschule - Mechatronik" description="Im Maschinen-, Anlagen- und Gerätebau spielen vermehrt mechanisch-elektronische (= mechatronische) Systeme (z. B. Steuerung von Werkzeugmaschinen, ..." imgsrc = "/src/assets/images/logo_mt_250.png" detailsrc = "/mt"></AbteilungsCard>
    </div>
    </div>
    <Calendar></Calendar>
    <FooterMerge></FooterMerge>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import AbteilungsCard from "@/components/AbteilungsCard.vue";
import HeroSection from "@/components/HeroSection.vue"
import Calendar from "@/components/Calendar.vue";
import SchoolStats from "@/components/SchoolStats.vue";
import FooterMerge from "@/components/FooterMerge.vue";
import QuickLinks from "@/components/QuickLinks.vue";

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
.pad {
  padding-bottom: 50px;
}
.head {
  text-align: center;
  color: #F8F8F8;
}
.lape {
  background-image: url('src/assets/images/laype.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 880px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
}
@media (max-width: 1300px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}
</style>
