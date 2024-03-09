<template>
    <div class="uk-background-muted">
        <NavBar></NavBar>
        <h1>SGA</h1>
        <FooterMerge></FooterMerge>
    </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
    name: 'SGA',
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style></style>