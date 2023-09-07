<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/src/assets/images/students.png" uk-img></div>
    <div class="st-cont">
      <h1>Informationen für Schülerinnen und Schüler</h1>
      <div class="sw einr">
        <h2>Software für Schülerinnen und Schüler</h2>
        <button class="uk-text-bold uk-button uk-button-link" href="https://www.office.com/">Office 365 Anmeldung</button>
        <p>Allen Schülerinnen und Schülern steht für die Zeit an der HTL Weiz Microsoft Office 365 kostenlos zur
          Verfügung. Die Software kann online verwendet werden oder am PC installiert werden. Über Office 365 haben
          Schülerinnen und Schüler auch Zugriff auf ihre Schul-E-Mail-Adresse (Webmail).</p>
        <button class="uk-text-bold uk-button uk-button-link" href="https://aka.ms/devtoolsforteaching">Azure Dev Tools
          für den Unterricht</button>
        <p>Außerdem können Schülerinnen und Schüler weitere Microsoft Software über Azure Dev Tools für den Unterricht
          gratis downloaden und installieren. Die Anmeldung erfolgt mit dem Office 365 Account. Um zur angebotenen
          Software zu gelangen, muss aus dem Menübereich Alle Dienste der Dienst Education Software gewählt werden.</p>
      </div>
      <div class="dl einr">
        <h2>Downloads und weitere Informationen</h2>
        <div class="button-grid">
          <button class="uk-button uk-button-default">Entschuldigung</button>
          <button class="uk-button uk-button-default">Praktikumsbestätigung</button>
          <button class="uk-button uk-button-default">Schulabmeldung</button>
          <button class="uk-button uk-button-default">Ansuchen Beurlaubung</button>
          <button class="uk-button uk-button-default">Anleitung EduPAY</button>
          <button class="uk-button uk-button-default">Anelitung Drucken und Kopieren</button>
          <button class="uk-button uk-button-default">Informationen zu Notebooks</button>
          <button class="uk-button uk-button-default">Notebookempfehlung</button>
        </div>
      </div>
    </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";

export default {
  name: 'StudentsView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
  },
};
</script>

<style>
.st-cont {
  padding-top: 100px;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
}
.einr {
  margin-left: 20px;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 2 rows of 4 columns */
  gap: 10px;
}
</style>
