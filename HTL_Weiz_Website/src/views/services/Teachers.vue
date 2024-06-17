<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/teachers.png" uk-img></div>
    <div class="padleftright padtop padbot">
      <h1>Informationen für Lehrerinnen und Lehrer</h1>
      <p>Startpunkt mit den wichtigsten Links und Informationen für Lehrerinnen und Lehrer der HTL Weiz. Für die Verwendung von eingeschränkten Bereichen wie dem Schulverwaltungstool müssen sich Lehrer zuerst registrieren und ein Benutzerkonto angelegt und vom Administrator aktiviert werden.</p>
      <div class="button-grid gridtopsp">
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="https://aoide.webuntis.com/WebUntis/?school=htbla-weiz#/basic/login">WebUntis</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="https://www.sokrates-bund.at/SOKB/idpSelection.do?actionDo=new">Sokrates</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="">Schulveranstaltungen</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="https://www.office.com/">Office 365</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="https://www.portal.at/pat/loginform?TARGET=https://secure.portal.at/pat/&SMQUERYDATA=&SMAUTHREASON=0">Portal Austria</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Formulare</a>
        <a class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="https://www.sokrates-bund.at/SOKB/idpSelection.do?actionDo=new">Sokrates Bund</a>
        <DownloadPdfButton
          button-label="HTL Weiz Root Certificate" 
          pdf-url="/files/htbla-weiz-root-ca.cer" 
          pdf-file-name="htbla-weiz-root-ca.cer"
          uk-tooltip="title: Root_Certificate; delay: 500">
        </DownloadPdfButton>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import DownloadPdfButton from '../../components/DownloadPdfButton.vue';

// Set metadata
useHead({
  title: 'Informationen für Lehrerinnen und Lehrer | HTL Weiz',
  meta: [
    { name: 'description', content: 'Finden Sie die wichtigsten Links und Informationen für Lehrerinnen und Lehrer der HTL Weiz. Zugang zu WebUntis, Sokrates, Office 365, und mehr.' },
    { name: 'keywords', content: 'HTL Weiz, Lehrer, WebUntis, Sokrates, Office 365, Schulveranstaltungen, Portal Austria, Formulare, Root Certificate' }
  ]
});
</script>

<script lang="ts">
export default {
  name: 'Teachers',
  components: {
    NavBar,
    Footer,
    DownloadPdfButton,
  },
};
</script>

<style>
.gridtopsp {
  margin-top: 50px;
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
