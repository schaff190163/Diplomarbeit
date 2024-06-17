<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <HeaderBanner></HeaderBanner>
    <div class="st-cont padleftright padtop padbot">
      <h1>Informationen für Schülerinnen und Schüler</h1>
      <div>
        <h2>Software für Schülerinnen und Schüler</h2>
        <a class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: https://www.office.com/; delay: 500" href="https://www.office.com/" target="_blank">Office 365 Anmeldung <span uk-icon="link"></span></a>
        <p>Allen Schülerinnen und Schülern steht für die Zeit an der HTL Weiz Microsoft Office 365 kostenlos zur Verfügung. Die Software kann online verwendet werden oder am PC installiert werden. Über Office 365 haben Schülerinnen und Schüler auch Zugriff auf ihre Schul-E-Mail-Adresse (Webmail).</p>
        <a class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: https://aka.ms/devtoolsforteaching; delay: 500" href="https://aka.ms/devtoolsforteaching" target="_blank">Azure Dev Tools für den Unterricht <span uk-icon="link"></span></a>
        <p>Außerdem können Schülerinnen und Schüler weitere Microsoft Software über Azure Dev Tools für den Unterricht gratis downloaden und installieren. Die Anmeldung erfolgt mit dem Office 365 Account. Um zur angebotenen Software zu gelangen, muss aus dem Menübereich Alle Dienste der Dienst Education Software gewählt werden.</p>
      </div>
      <div class="dl">
        <h2>Downloads und weitere Informationen</h2>
        <div class="button-grid">
          <DownloadPdfButton 
            button-label="Entschuldigungen" 
            pdf-url="/files/Entschuldigung2019.pdf" 
            pdf-file-name="Entschuldigung.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Praktikumsbestätigung" 
            pdf-url="/files/praktikumsbestaetigung.pdf" 
            pdf-file-name="Praktikumsbestätigung.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Schulabmeldung" 
            pdf-url="/files/Schulabmeldung_2024.pdf" 
            pdf-file-name="Schulabmeldung.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Ansuchen Beurlaubung" 
            pdf-url="/files/Ansuchen_Beurlaubung.pdf" 
            pdf-file-name="Ansuchen_Beurlaubung.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Anleitung EduPAY" 
            pdf-url="/files/eduPAY_Anleitung.pdf" 
            pdf-file-name="Anleitung_EduPAY.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Anleitung Drucken und Kopieren" 
            pdf-url="/files/Drucken_und_Kopieren.pdf" 
            pdf-file-name="Anleitung_Drucken_Kopieren.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Informationen zu Notebooks" 
            pdf-url="/files/BYOD_Informationen_zu_Notebooks.pdf" 
            pdf-file-name="Informationen_zu_Notebooks.pdf">
          </DownloadPdfButton>
          <DownloadPdfButton 
            button-label="Notebookempfehlung" 
            pdf-url="/files/Notebookempfehlung.pdf" 
            pdf-file-name="Notebookempfehlung.pdf">
          </DownloadPdfButton>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import DownloadPdfButton from "../../components/DownloadPdfButton.vue";
import HeaderBanner from '../../components/HeaderBanner.vue';

// Set metadata
useHead({
  title: 'Informationen für Schülerinnen und Schüler | HTL Weiz',
  meta: [
    { name: 'description', content: 'Erhalten Sie die wichtigsten Informationen und Software-Links für Schülerinnen und Schüler der HTL Weiz. Zugang zu Office 365, Azure Dev Tools, und mehr.' },
    { name: 'keywords', content: 'HTL Weiz, Schüler, Schülerinnen, Office 365, Azure Dev Tools, Downloads, Formulare' }
  ]
});
</script>

<script lang="ts">
export default {
  name: 'Students',
  components: {
    NavBar,
    Footer,
    DownloadPdfButton,
    HeaderBanner,
  },
};
</script>

<style>
.st-cont {
  margin: 0;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
@media (max-width: 800px) {
  .button-grid {
  grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .button-grid {
  grid-template-columns: repeat(2, 1fr);
  }
}
</style>
