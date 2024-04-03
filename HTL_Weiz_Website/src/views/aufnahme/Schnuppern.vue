<template>
    <div class="uk-background-muted">
        <NavBar></NavBar>
        <h1>Schnuppern</h1>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
    name: 'Schnuppern',
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style></style>
