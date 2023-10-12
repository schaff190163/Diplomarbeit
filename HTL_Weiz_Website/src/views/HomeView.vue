<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-max-large uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-cover uk-background-center-center uk-light pad uk-box-shadow-medium"
      data-src="src\assets\images\florian-ohl-5BWckyXWwSo-unsplash.jpg" uk-img>
    </div>
<<<<<<< HEAD
    <div class="grid-container uk-background-muted padleftright padtopbot darkbg" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
=======
    <div class="grid-container uk-background-muted padleftright padtopbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
>>>>>>> 1587bd6066a1cb61487bd5a3a6bba51c5bee93a3
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Wirtschaftsingineure" description="Die Wirtschaft braucht Persönlichkeiten, die sowohl den Markt als auch die Produkte von morgen mitgestalten. Hierfür sind folgende Anforderungen..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/wi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Elektrotechnik" description="Die Bedeutung der Elektrotechnik ist mittlerweile in allen Bereichen der Industrie,  der Wirtschaft und im Bereich Dienstleistungen sehr groß geworden..." imgsrc = "/src/assets/images/logo_et_250.png" detailsrc = "/et"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Informationstechnologie" description="Die Informationstechnologie stellt das Bindeglied zwischen Benutzer und Maschine sowie Mensch und Technik dar. Sie steht damit auch zwischen der..." imgsrc = "/src/assets/images/logo_it_250.png" detailsrc = "/it"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Abendschule - Wirtschaftsingenieure" description="Ein vielfältiges Bildungsprogramm für Berufstätige bietet die „Abendschule“ der HTL Weiz mit der Fachrichtung „WIRTSCHAFSTINGENIEURE - ..." imgsrc = "/src/assets/images/logo_wi_250.png" detailsrc = "/awi"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschienenbau - Anlagentechnik" description="Nahezu alle Produkte in unserem Alltag werden mit Maschinen hergestellt. So unterschiedlich diese Maschinen auch sein mögen, die technischen..." imgsrc = "/src/assets/images/logo_mb_250.png" detailsrc = "/mb"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschinenbau - Automatisierungstechnik" description="Unter Automatisierungstechnik versteht man das Zusammenspiel und Ineinandergreifen von Maschinenbau und Elektrotechnik. Ziel ist es, ..." imgsrc = "/src/assets/images/logo_at_250.png" detailsrc = "/at"></AbteilungsCard>
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Maschinenbau - Umwelttechnik" description="Umwelttechniker/innen messen und untersuchen Schadstoffe. Basierend auf den daraus gewonnenen Erkenntnissen suchen sie nach Lösungen, um..." imgsrc = "/src/assets/images/logo_ut_250.png" detailsrc = "/ut"></AbteilungsCard>
<<<<<<< HEAD
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Fachschule - Mechatronik" description="Im Maschinen-, Anlagen- und Gerätebau spielen vermehrt mechanisch-elektronische (= mechatronische) Systeme (z. B. Steuerung von Werkzeugmaschinen, ..." imgsrc = "/src/assets/images/logo_mt_250.png" detailsrc = "/mt"></AbteilungsCard>
=======
      <AbteilungsCard uk-scrollspy-class="uk-animation-slide-bottom" title="Fachschule - Mechatronik" description="Im Maschinen-, Anlagen- und Gerätebau spielen vermehrt mechanisch-elektronische (= mechatronische) Systeme (z. B. Steuerung von Werkzeugmaschinen, ..." imgsrc = "/src/assets/images/logo_itk_250.png" detailsrc = "/mt"></AbteilungsCard>
>>>>>>> 1587bd6066a1cb61487bd5a3a6bba51c5bee93a3
    </div>
    <Calendar></Calendar>
    <AuszeichnungsRow></AuszeichnungsRow>
    <GeoRow></GeoRow>
    <Imprint></Imprint>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import AbteilungsCard from "@/components/AbteilungsCard.vue";
import HeroSection from "@/components/HeroSection.vue"
import GeoRow from "@/components/GeoRow.vue";
<<<<<<< HEAD
import Calendar from "@/components/Calendar.vue";
=======
>>>>>>> 1587bd6066a1cb61487bd5a3a6bba51c5bee93a3

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    AbteilungsCard,
    HeroSection,
    GeoRow,
<<<<<<< HEAD
    Calendar,
=======
>>>>>>> 1587bd6066a1cb61487bd5a3a6bba51c5bee93a3
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
@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
