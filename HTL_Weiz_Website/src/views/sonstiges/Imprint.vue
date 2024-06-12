<template>
    <div>
        <NavBar></NavBar>
        <div class="padtop padbot padleftright">
            <h1>Impressum</h1>
            <h2>Höhere Technische Bundeslehranstalt Weiz</h2>
            <p>Dr.Karl Widdmannstraße 40 <br>A-8160 Weiz</p>
            <h2>Direktor der HTL Weiz</h2>
            <p>Dipl.-Ing. Gottfried Purkarthofer</p>
            <h2>Die zuständige Aufsichtsbehörde ist</h2>
            <p>Landesschulrat für Steiermark <br>Körblergasse 23 <br>Postfach 663 <br>A-8011 Graz</p>
            <h2>Datenschutzerklärung</h2>
            <p>siehe <a class="uk-link-text"
                    href="https://bildung.bmbwf.gv.at/schulen/datenschutz/index.html">https://bildung.bmbwf.gv.at/schulen/datenschutz/index.html</a>
            </p>
            <h2>Haftungsauschluss</h2>
            <p>Die inhaltliche Verantwortung der einzelnen WWW-Seiten liegt bei den jeweiligen informationseinstellenden
                Einrichtungen oder Personen. Eine Haftung für die Richtigkeit, Vollständigkeit und Aktualität dieser
                Webseiten kann trotz sorgfältiger Prüfung nicht übernommen werden. Die Schule übernimmt insbesondere
                keinerlei Haftung für eventuelle Schäden oder Konsequenzen, die durch die direkte oder indirekte Nutzung der
                angebotenen Inhalte entstehen.</p>
            <h2>Urheberrecht</h2>
            <p>Alle im Internetangebot der HTL Weiz veröffentlichten Inhalte (Layout, Texte, Bilder, Grafiken usw.)
                unterliegen dem Urheberrecht. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf vorheriger
                ausdrücklicher Zustimmung. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung,
                Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien
                und Systemen. Fotokopien und Downloads von Web-Seiten für den privaten, wissenschaftlichen und nicht
                kommerziellen Gebrauch dürfen hergestellt werden.</p>
            <p>Wir erlauben ausdrücklich und begrüßen das Zitieren unserer Dokumente und Webseiten sowie das Setzen von
                Links auf unsere Website.</p>
            <p>Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken und Warenzeichen
                unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten
                der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen,
                dass Markenzeichen nicht durch Rechte Dritter geschützt sind.</p>
        </div>
        <Footer></Footer>
</div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

useHead({
  title: 'Impressum - HTL Weiz',
  meta: [
    { name: 'description', content: 'Impressum der HTL Weiz: Kontaktinformationen, Verantwortlichkeiten, Datenschutzerklärung, Haftungsausschluss, und Urheberrecht.' },
    { name: 'keywords', content: 'HTL Weiz, Impressum, Kontakt, Direktor, Aufsichtsbehörde, Datenschutzerklärung, Haftungsausschluss, Urheberrecht' }
  ]
});
</script>


<style>
</style>