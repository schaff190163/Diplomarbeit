<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";

export default {
  name: 'AnmeldungView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
  },
};
</script>

<style></style>
