<template>
  <div>
    <NavBar></NavBar>
    <div class="grid-container">
      <img src="/src/assets/images/heroedit.png" width="1800" height="1200" alt="">
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
      <AbteilungsCard></AbteilungsCard>
    </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AbteilungsCard from "@/components/AbteilungsCard.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Imprint,
    AbteilungsCard,
    AuszeichnungsRow
  },
};
</script>

<style>
/* Styles for this component */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Three columns */
  gap: 20px;
  /* Gap between cards */
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  position: relative;
  /* Set the container as a reference for positioning */
}
</style>
