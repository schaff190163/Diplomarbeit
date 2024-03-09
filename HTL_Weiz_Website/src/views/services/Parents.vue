<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/parents.png" uk-img></div>
    <div class="st-cont padleftright padtop padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <h1 >Informationen für Eltern und Erziehungsberechtigte</h1>
      <div class="sw einr">
        <div>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: ---; delay: 500" href="...">Elternverein</button>
        <p>Der Elternverein der HTL Weiz ist ein wichtiges Bindeglied zwischen Schülern und Schülerinnen, Eltern und Erziehungsberechtigten sowie Lehrerinnen und Lehrern. Mehr Informationen zum Elternverein gibt es in einem eigenen Bereich dieser Website.</p>
        </div>
        <div>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: ---; delay: 500" href="...">Zahlung Arbeitsmittelbeiträge und Schulveranstaltungen</button>
        <p>Zahlungen an die Schule werden über das Portal eduPAY abgewickelt. Die Zahlung ist mittels EPS (Onlinebanking Ihrer Bank), Kreditkarten, Maestro oder Überweisung möglich. Bitte beachten Sie dass jede Zahlung eine individuelle Transaktionsnummer erhält und diese nur einmal verwendet werden darf.
        Alle Schülerinnen und Schüler können sich mit Ihren Office 365 zugangsdaten an eduPAY anmelden. Wenn Sie dies möchten ist es auch möglich, dass Ihr Sohn / Ihre Tochter einen eigenen "Eltern-Account" für Sie erstellt.</p>
        </div>
        <div>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: ---; delay: 500" href="...">Terminbuchung Elternsprechtag</button>
        <p>Eine Anleitung zur Buchung eines Gesprächstermines für den Elternsprechtag finden Sie hier:</p>
        </div>
        <div>
        <button class="uk-text-bold uk-button uk-button-text" uk-tooltip="title: ---; delay: 500" href="...">TTZ Lerncenter</button>
        <p>Das TTZ Weiz bietet in Zusammenarbeit mit der HTL Weiz, dem Elternverein und den Bildungsberatern Lernhilfe für Schülerinnen und Schüler unserer Schule an:</p>
        </div>
      </div>
    </div>
  </div>
  <FooterMerge></FooterMerge>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
  name: 'Parents',
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
