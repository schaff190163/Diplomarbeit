<template>
    <div class="uk-background-muted">
        <NavBar></NavBar>
        <div class="padleftright padtop padbot">
            <h1 class="uk-text-light padbot mpheading">Schulveranstaltung hinzufügen</h1>
            <JSPDF></JSPDF>
        </div>
        <FooterMerge></FooterMerge>
    </div>
</template>

<script lang="ts">
import FooterMerge from "../components/FooterMerge.vue";
import NavBar from "../components/NavBar.vue";
import JSPDF from "../components/JSPDF.vue"

export default {
    name: 'EditSchulveranstaltungen',
    components: {
        NavBar,
        FooterMerge,
        JSPDF,
    },
};
</script>

<style>
.padnav {
    padding-top: 100px;
}

.grid-containersv {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    position: relative;
}
</style>
