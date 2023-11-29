<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1>Partner</h1>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import FooterMerge from "../components/FooterMerge.vue";

export default {
  name: 'Partner',
  components: {
    NavBar,
    FooterMerge,
  },
};
</script>

<style></style>
