<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <HeaderBanner></HeaderBanner>
    <div class="st-cont padleftright padtop padbot">
      <h1>Informationen für Eltern und Erziehungsberechtigte</h1>
      <div class="sw einr">
        <div>
          <button class="uk-text-bold uk-button uk-button-text uk-text-left" uk-tooltip="title: Elterverein der HTL Weiz; delay: 500">
            <router-link to="/elternverein" style="color: #333;">Elternverein <span uk-icon="link"></span></router-link>
          </button>
          <p>Der Elternverein der HTL Weiz ist ein wichtiges Bindeglied zwischen Schülern und Schülerinnen, Eltern und Erziehungsberechtigten sowie Lehrerinnen und Lehrern. Mehr Informationen zum Elternverein gibt es in einem eigenen Bereich dieser Website.</p>
        </div>
        <div>
          <button class="uk-text-bold uk-button uk-button-text uk-text-left" uk-tooltip="title: https://edupay.bildung.at; delay: 500">
            <a href="https://edupay.bildung.at/portal/Account/Login?ReturnUrl=%2Fportal" target="_blank" style="color: #333;">Zahlung Arbeitsmittelbeiträge und Schulveranstaltungen <span uk-icon="link"></span></a>
          </button>
          <p>Zahlungen an die Schule werden über das Portal eduPAY abgewickelt. Die Zahlung ist mittels EPS (Onlinebanking Ihrer Bank), Kreditkarten, Maestro oder Überweisung möglich. Bitte beachten Sie, dass jede Zahlung eine individuelle Transaktionsnummer erhält und diese nur einmal verwendet werden darf. Alle Schülerinnen und Schüler können sich mit Ihren Office 365 Zugangsdaten an eduPAY anmelden. Wenn Sie dies möchten, ist es auch möglich, dass Ihr Sohn / Ihre Tochter einen eigenen "Eltern-Account" für Sie erstellt.</p>
        </div>
        <div>
          <div class="uk-text-bold uk-button uk-button-text uk-text-left">Terminbuchung Elternsprechtag</div>
          <p>Eine Anleitung zur Buchung eines Gesprächstermines für den Elternsprechtag finden Sie hier:</p>
          <DownloadPdfButton 
            button-label="Download Sprechtag Anleitung" 
            pdf-url="/files/WebUntis_Sprechtag_-_Erziehungsberechtigte.pdf" 
            pdf-file-name="WebUntis_Sprechtag_-_Erziehungsberechtigte.pdf"
            uk-tooltip="title: Terminbuchung Elternsprechtag; delay: 500">
          </DownloadPdfButton>
        </div>
        <div>
          <button class="uk-text-bold uk-button uk-button-text uk-text-left" uk-tooltip="title: TTZ Lerncenter; delay: 500">
            <a href="https://www.ttz-weiz.at/index.php/ttz-lern-center-weiz" target="_blank" style="color: #333;">TTZ Lerncenter <span uk-icon="link"></span></a>
          </button>
          <p>Das TTZ Weiz bietet in Zusammenarbeit mit der HTL Weiz, dem Elternverein und den Bildungsberatern Lernhilfe für Schülerinnen und Schüler unserer Schule an:</p>
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
import DownloadPdfButton from '../../components/DownloadPdfButton.vue';
import HeaderBanner from "../../components/HeaderBanner.vue";

// Set metadata
useHead({
  title: 'Informationen für Eltern und Erziehungsberechtigte | HTL Weiz',
  meta: [
    { name: 'description', content: 'Erhalten Sie wichtige Informationen und Links für Eltern und Erziehungsberechtigte der HTL Weiz. Zugang zu Elternverein, eduPAY, Terminbuchung für den Elternsprechtag und mehr.' },
    { name: 'keywords', content: 'HTL Weiz, Eltern, Erziehungsberechtigte, Elternverein, eduPAY, Elternsprechtag, TTZ Lerncenter' }
  ]
});
</script>

<script lang="ts">
export default {
  name: 'Parents',
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
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}
.padtop {
  padding-top: 32px !important;
}
.padbot {
  padding-bottom: 32px !important;
}
@media (max-width: 640px) {
  .padleftright {
    padding-left: 40px;
    padding-right: 40px;
  }
  .button-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
