<template>
    <div class="padtop">
    <div class="padleftright padbot uk-child-width-expand@s" uk-grid uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
        <div>
            <h4>Kontakt</h4>
            <ul class="uk-list uk-list-collapse">
                <li>Dr.-Karl-Widdmann-Straße 40</li>
                <li>8160 Weiz</li>
                <li>Austria</li>
                <li>+43 50248-043</li>
                <li>office@htlweiz.at</li>
            </ul>
        </div>

        <div>
            <h4>Öffnungszeiten</h4>
            <ul class="uk-list uk-list-collapse">
                <li>Schülerkanzlei</li>
                <li>Mo - Do: 7:30 - 15:00</li>
                <li>Fr: 7:30 - 14:00</li>
                <li>Unterrichtszeiten</li>
                <li>Mo - Fr: 7:50 - 17:35 (Tagesschule)</li>
                <li>Mo - Do: 16:45 - 21:30 (Abendschule)</li>
            </ul>
        </div>

        <div>
            <h4>Fürstenfeld</h4>
            <ul class="uk-list uk-list-collapse">
                <li>Blücherstraße 2</li>
                <li>8280 Fürstenfeld</li>
                <li>Austria</li>
            </ul>
        </div>

        <div>
            <h4>Beratungseinrichtungen</h4>
            <ul class="uk-list uk-list-collapse">
                <li>Bildungsberater</li>
                <li>Jugendcoaching</li>
                <li>Mädchenbeauftragte</li>
                <li>Schularzt</li>
                <li>Schulpsychologin</li>
                <li>Schulpsychologische Beratungsstelle</li>
                <li>Vertrauenslehrer</li>
            </ul>
        </div>
    </div>
    <div class="padleftright ifooter">
        Copyright HTL Weiz 2023 | 
        <router-link to="/imprint" class="imprintlink">Impressum und Datenschutz</router-link>
        |
        <router-link to="/e2mily" class="imprintlink">E2MILY</router-link>
    </div>
    </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
    name: 'Imprint',
    components: {
        /*,*/
    },
};
</script>

<style>
/* Styles for this component */
.ifooter {
    background-color: #1BA373ff;
    color: #F8F8F8ff;
}
.imprintlink {
    color: #D7D7D7ff;
}
</style>