<template>
  <div>
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-light hero-image">
      <img src="/images/HTL_Page/wide/hero_it.png" alt="Hero Image" class="hero-img">
    </div>
    <h1 class="uk-text-lead zweigheading padleftright">Informationstechnologie</h1>
    <QuickFacts_Abteilungen class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="positiver Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts_Abteilungen>
    <AbteilungsText></AbteilungsText>
    <FooterMerge></FooterMerge>
  </div>
</template>


<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import QuickFacts_Abteilungen from "../../components/QuickFacts_Abteilungen.vue";
import AbteilungsText from "../../components/AbteilungsText.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: 'IT',
  components: {
    NavBar,
    QuickFacts_Abteilungen,
    AbteilungsText,
    Footer,
  },
};
</script>

<style>
.zweigheading {
  font-size: 40px;
}

@media (max-width: 640px) {
  .zweigheading {
    font-size: 30px;
  }
}

.hero-image {
  width: 100%;
  height: auto;
}

.hero-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the image covers the container without being distorted */
  object-position: center; /* Centers the image */
}

@media (max-width: 800px) {
  .hero-img {
    height: 40vh; /* Adjust this if you want a different height on smaller screens */
  }
}

@media (max-width: 530px) {
  .hero-img {
    height: 27vh; /* Adjust this if you want a different height on smaller screens */
  }
}
</style>


