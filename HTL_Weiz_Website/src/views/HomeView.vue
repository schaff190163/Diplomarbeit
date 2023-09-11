<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light pad"
      data-src="/src/assets/images/hero-bg.jpg" uk-img>
    </div>
    <div class="grid-container uk-background-muted">
      <AbteilungsCard title="Wirtschaftsingineure" description="Die Wirtschaft braucht Persönlichkeiten, die sowohl den Markt als auch die Produkte von morgen mitgestalten. Hierfür sind folgende Anforderungen..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/wi"></AbteilungsCard>
      <AbteilungsCard title="Elektrotechnik" description="Die Bedeutung der Elektrotechnik ist mittlerweile in allen Bereichen der Industrie,  der Wirtschaft und im Bereich Dienstleistungen sehr groß geworden..." imgsrc = "/src/assets/images/logo_et_250.png" detailsrc = "/et"></AbteilungsCard>
      <AbteilungsCard title="Informationstechnologie" description="Die Informationstechnologie stellt das Bindeglied zwischen Benutzer und Maschine sowie Mensch und Technik dar. Sie steht damit auch zwischen der..." imgsrc = "/src/assets/images/logo_it_250.png" detailsrc = "/it"></AbteilungsCard>
      <AbteilungsCard title="Maschinenbau - Umwelttechnik" description="Umwelttechniker/innen messen und untersuchen Schadstoffe. Basierend auf den daraus gewonnenen Erkenntnissen suchen sie nach Lösungen, um..." imgsrc = "/src/assets/images/logo_ut_250.png" detailsrc = "/ut"></AbteilungsCard>
      <AbteilungsCard title="Maschienenbau - Anlagentechnik" description="Nahezu alle Produkte in unserem Alltag werden mit Maschinen hergestellt. So unterschiedlich diese Maschinen auch sein mögen, die technischen..." imgsrc = "/src/assets/images/logo_mb_250.png" detailsrc = "/mb"></AbteilungsCard>
      <AbteilungsCard title="Maschinenbau - Automatisierungstechnik" description="Unter Automatisierungstechnik versteht man das Zusammenspiel und Ineinandergreifen von Maschinenbau und Elektrotechnik. Ziel ist es, ..." imgsrc = "/src/assets/images/logo_at_250.png" detailsrc = "/at"></AbteilungsCard>
      <AbteilungsCard title="Abendschule - Wirtschaftsingenieure" description="Ein vielfältiges Bildungsprogramm für Berufstätige bietet die „Abendschule“ der HTL Weiz mit der Fachrichtung „WIRTSCHAFSTINGENIEURE - ..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/awi"></AbteilungsCard>
      <AbteilungsCard title="Kolleg - Informatik" description="Computerpraktikum & Technische Informatik werden im 1. und 2. Semester gelehrt, wobei die Grundlagen der Hardware und Informatik vermittelt werden. Das..." imgsrc = "/src/assets/images/logo_mt_250.png" detailsrc = "/mt"></AbteilungsCard>
      <AbteilungsCard title="Fachschule - Mechatronik" description="Im Maschinen-, Anlagen- und Gerätebau spielen vermehrt mechanisch-elektronische (= mechatronische) Systeme (z. B. Steuerung von Werkzeugmaschinen, ..." imgsrc = "/src/assets/images/logo_itk_250.png" detailsrc = "/itk"></AbteilungsCard>
    </div>
    <ScrollTop></ScrollTop>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import AbteilungsCard from "@/components/AbteilungsCard.vue";
import ScrollTop from "@/components/ScrollTop.vue";
import HeroSection from "@/components/HeroSection.vue"

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    AbteilungsCard,
    ScrollTop,
    HeroSection,
  },
};
</script>

<style>
/* Styles for this component */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
  position: relative;
}
.pad {
  padding-bottom: 50px;
}


</style>
