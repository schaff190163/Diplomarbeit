<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/students.png" uk-img></div>
      <div class="st-cont padleftright padtop padbot">
      <h1 >Informationen für Schülerinnen und Schüler</h1>
      <div>
        <h2>Software für Schülerinnen und Schüler</h2>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: https://www.office.com/; delay: 500" href="https://www.office.com/">Office 365 Anmeldung</button>
        <p>Allen Schülerinnen und Schülern steht für die Zeit an der HTL Weiz Microsoft Office 365 kostenlos zur
          Verfügung. Die Software kann online verwendet werden oder am PC installiert werden. Über Office 365 haben
          Schülerinnen und Schüler auch Zugriff auf ihre Schul-E-Mail-Adresse (Webmail).</p>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: https://aka.ms/devtoolsforteaching; delay: 500" href="https://aka.ms/devtoolsforteaching">Azure Dev Tools
          für den Unterricht</button>
        <p>Außerdem können Schülerinnen und Schüler weitere Microsoft Software über Azure Dev Tools für den Unterricht
          gratis downloaden und installieren. Die Anmeldung erfolgt mit dem Office 365 Account. Um zur angebotenen
          Software zu gelangen, muss aus dem Menübereich Alle Dienste der Dienst Education Software gewählt werden.</p>
      </div>
      <div class="dl" >
        <h2>Downloads und weitere Informationen</h2>
        <div class="button-grid">
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Entschuldigung</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Praktikumsbestätigung</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Schulabmeldung</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Ansuchen Beurlaubung</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Anleitung EduPAY</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Anelitung Drucken und Kopieren</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Informationen zu Notebooks</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Notebookempfehlung</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
  name: 'Students',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.st-cont {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
@media (max-width: 640px) {
  .button-grid {
  grid-template-columns: repeat(1, 1fr);
}
}
</style>
