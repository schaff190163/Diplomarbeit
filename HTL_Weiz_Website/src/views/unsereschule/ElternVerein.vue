<template>
  <div>
    <NavBar></NavBar>
    <div class="padleftright">
      <h1>Elternverein der HTL Weiz</h1>
      <p>Der Elternverein (EV) an der Schule ist ein wichtiges Bindeglied zwischen den LehrerInnen, SchülerInnen und den Eltern in allen Belangen des Schulalltags.</p>
      <p>Durch die Bezahlung des EV-Mitgliedsbeitrages sind Sie automatisch Mitglied im EV und durch den Beitrag von 7 € sichern Sie sich ein Exemplar des Jahresberichts am Ende des Schuljahres.</p>
      <p>Wenn mehrere Kinder einer Familie im gleichen Jahr in der Schule eingeschrieben sind, so ist der Mitgliedsbeitrag nur einmal (vom ältesten Schüler) zu bezahlen. Die jüngeren mögen dies bitte ihrem Klassenvorstand (KV) bekanntgeben.</p>
      <p>Mit den finanziellen Mitteln werden diverse Aktionen in der Schule oder Projektarbeiten im Rahmen von Freigegenständen gefördert. An SchülerInnen von sozial schwächeren Familien oder in besonderen Härtefällen wird zu Ausflügen, Exkursionen, Sommer- oder Wintersportwochen und Sprachwochen auf Antrag ein Zuschuss gewährt. Anträge sind mit dem unten angeführten Formular über den KV an den EV einzubringen.</p>
      <DownloadPdfButton 
        button-label="Zuschuss Elternverein Download" 
        pdf-url="/files/20160217ElternvereinZuschuss.pdf" 
        pdf-file-name="Elternverein_Zuschuss.pdf">
      </DownloadPdfButton>
      <p>Weiters sind alle SchülerInnen durch eine Kollektivunfallversicherung bei der Generali Versicherungs AG versichert in der Schule, auf dem direkten Schulweg oder bei Schulveranstaltungen. Im Ereignisfall bitte Kontaktaufnahme über den EV.</p>
      <p>Alle Mitglieder sind bei den EV Sitzungen willkommen und herzlich eingeladen! Sie finden jeweils am Abend des Elternsprechtags um 18:00 Uhr statt. Die nächsten Termine finden Sie in der Rubrik "Termine". </p>
      <p>Sollten Sie noch Fragen oder Anregungen haben - wir freuen uns über Ihr Email.</p>
      <h3>Kontaktadresse:</h3>
      <ul>
        <li>Elternverein der HTL Weiz</li>
        <li>Dr. Karl-Widdmann Straße 40</li>
        <li>8160 Weiz</li>
      </ul>
      <hr>
      <table class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>Funktion</th>
            <th>Name</th>
            <th>Email</th>
            <th class="tel-col">Telefon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Obmann</td>
            <td class="uk-text-light">Ing. Herwig Glössl</td>
            <td class="uk-text-light">ev.obmann@htlweiz.at</td>
            <td class="uk-text-light tel-col">+43 (664) 88286808</td>
          </tr>
          <tr>
            <td>Obmann Stellvertreter</td>
            <td class="uk-text-light">Stefan Tandl</td>
            <td class="uk-text-light">ev.obmann-stv@htlweiz.at</td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Kassier</td>
            <td class="uk-text-light">Christoph Wurzinger</td>
            <td class="uk-text-light">ev.kassier@htlweiz.at</td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Kassier Stellvertreter</td>
            <td class="uk-text-light">Markus Lederer</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Schriftführer</td>
            <td class="uk-text-light">Andrea Leiner</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Schriftführer Stellvertreter</td>
            <td class="uk-text-light">Johanna Mandl</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
        </tbody>
      </table>
    </div> 
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import DownloadPdfButton from "../../components/DownloadPdfButton.vue";

export default {
  name: 'ElternVerein',
  components: {
    NavBar,
    Footer,
    DownloadPdfButton,
  },
  setup() {
    useHead({
      title: 'Elternverein der HTL Weiz',
      meta: [
        { name: 'description', content: 'Informationen und Kontakt zum Elternverein der HTL Weiz.' },
      ],
    });
  },
};
</script>

<style>
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}

@media (max-width: 640px) {
  .padleftright {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .tel-col {
    display: none;
  }
}

@media (max-width: 480px) {
  .uk-table td:nth-child(3) {
    display: none;
  }
}
</style>
