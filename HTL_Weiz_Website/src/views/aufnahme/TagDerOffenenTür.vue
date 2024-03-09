<template>
    <div class="uk-background-muted">
        <NavBar></NavBar>
        <h1>TagDerOffenenTür</h1>
        <FooterMerge></FooterMerge>
    </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
    name: 'TagDerOffenenTür',
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style></style>
