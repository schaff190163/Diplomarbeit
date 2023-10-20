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
export default {
  name: "NewsView",
  components: {
    NavBar: () => import(/* webpackChunkName: "navbar" */ "@/components/NavBar.vue"),
    PostCard: () => import(/* webpackChunkName: "postcard" */ "@/components/PostCard.vue"),
    FooterMerge: () => import(/* webpackChunkName: "footermerge" */ "@/components/FooterMerge.vue"),
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
