<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import FooterMerge from "../components/FooterMerge.vue";

export default {
  name: 'ErasmusView',
  components: {
    NavBar,
    FooterMerge,
  },
};
</script>

<style></style>
