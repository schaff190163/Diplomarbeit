<template>
  <div>
      <AuszeichnungsRow></AuszeichnungsRow>
      <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import GeoRow from "@/components/GeoRow.vue";

export default {
  name: 'FooterMerge',
  components: {
  Imprint: () => import(/* webpackChunkName: "imprint" */ "@/components/Imprint.vue"),
  AuszeichnungsRow: () => import(/* webpackChunkName: "auszeichnungsrow" */ "@/components/AuszeichnungsRow.vue"),
  GeoRow: () => import(/* webpackChunkName: "georow" */ "@/components/GeoRow.vue"),
  },
};
</script>

<style>
/* Styles for this component */
</style>
