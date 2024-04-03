<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1>Elternverein</h1>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
  name: 'ElternVerein',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style></style>