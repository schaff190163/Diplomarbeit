<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <AuszeichnungsRow></AuszeichnungsRow>
    <GeoRow></GeoRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import GeoRow from "@/components/GeoRow.vue";

export default {
  name: 'ErasmusView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    GeoRow,
  },
};
</script>

<style></style>
