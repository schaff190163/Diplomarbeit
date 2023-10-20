<template>
  <div>
    <NavBar></NavBar>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AnmeldungView',
  components: {
    NavBar: () => import(/* webpackChunkName: "navbar" */ "@/components/NavBar.vue"),
    FooterMerge: () => import(/* webpackChunkName: "footermerge" */ "@/components/FooterMerge.vue"),
  },
};
</script>

<style></style>
