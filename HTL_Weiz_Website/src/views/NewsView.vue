<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="padleftright padtopbot padnav grid-containersv">
      <PostCard></PostCard>
      <FooterMerge></FooterMerge>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import PostCard from "@/components/PostCard.vue";
import FooterMerge from "@/components/FooterMerge.vue";

export default {
  name: "NewsView",
  components: {
    NavBar,
    PostCard,
    FooterMerge,
  }
}
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
