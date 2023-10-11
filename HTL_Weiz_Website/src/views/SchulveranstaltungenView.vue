<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="padleftright padtopbot padnav grid-containersv">
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <GeoRow></GeoRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import PostCard from "@/components/PostCard.vue";
import GeoRow from "@/components/GeoRow.vue";

export default {
  name: 'SchulveranstaltungenView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    PostCard,
    GeoRow,
  },
};
</script>

<style>
.padnav {
  padding-top: 100px;
}

.grid-containersv {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  position: relative;
}
</style>
