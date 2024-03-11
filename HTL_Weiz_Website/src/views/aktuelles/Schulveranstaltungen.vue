<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="padleftright padtop padbot padnav grid-containersv">
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import PostCard from "../../components/PostCard.vue";

export default {
  name: 'Schulveranstaltungen',
  components: {
    NavBar,
    PostCard,
    Footer,
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
../../components/Card_Post.vue