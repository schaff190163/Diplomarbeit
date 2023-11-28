<template>
  <div>
      <AuszeichnungsRow></AuszeichnungsRow>
      <GeoRow></GeoRow>
      <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import Imprint from "../components/Imprint.vue";
import AuszeichnungsRow from "../components/AuszeichnungsRow.vue";
import GeoRow from "../components/GeoRow.vue";

export default {
  name: 'FooterMerge',
  components: {
  Imprint,
  AuszeichnungsRow,
  GeoRow,
  },
};
</script>

<style>
/* Styles for this component */
</style>
