<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/src/assets/images/parents.png" uk-img></div>
    <div class="st-cont">
      <h1>Informationen für Eltern und Erziehungsberechtigte</h1>
      <div class="sw einr">
        <h2>Elternverein</h2>
        <button class="uk-text-bold uk-button uk-button-link" href="#">Elternverein</button>
        <p>Der Elternverein der HTL Weiz ist ein wichtiges Bindeglied zwischen Schülern und Schülerinnen, Eltern und Erziehungsberechtigten sowie Lehrerinnen und Lehrern. Mehr Informationen zum Elternverein gibt es in einem eigenen Bereich dieser Website.</p>
        <button class="uk-text-bold uk-button uk-button-link uk-text-left" href="#">Zahlung Arbeitsmittelbeiträge und Schulveranstaltungen</button>
        <p>Zahlungen an die Schule werden über das Portal eduPAY abgewickelt. Die Zahlung ist mittels EPS (Onlinebanking Ihrer Bank), Kreditkarten, Maestro oder Überweisung möglich. Bitte beachten Sie dass jede Zahlung eine individuelle Transaktionsnummer erhält und diese nur einmal verwendet werden darf.
        Alle Schülerinnen und Schüler können sich mit Ihren Office 365 zugangsdaten an eduPAY anmelden. Wenn Sie dies möchten ist es auch möglich, dass Ihr Sohn / Ihre Tochter einen eigenen "Eltern-Account" für Sie erstellt.</p>
        <button class="uk-text-bold uk-button uk-button-link" href="#">Terminbuchung Elternsprechtag</button>
        <p>Eine Anleitung zur Buchung eines Gesprächstermines für den Elternsprechtag finden Sie hier:</p>
        <button class="uk-text-bold uk-button uk-button-link" href="#">TTZ Lerncenter</button>
        <p>Das TTZ Weiz bietet in Zusammenarbeit mit der HTL Weiz, dem Elternverein und den Bildungsberatern Lernhilfe für Schülerinnen und Schüler unserer Schule an:</p>
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
  name: 'ParentsView',
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
