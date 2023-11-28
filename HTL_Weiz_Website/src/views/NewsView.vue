<template>
  <div>
    <NavBar></NavBar>
    <h1 class="padleftright">News an der HTL Weiz</h1>
    <div class="padleftright padtop padbot grid-containersv">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post"></PostCard>
      </div>
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import PostCard from "../components/PostCard.vue";
import FooterMerge from "../components/FooterMerge.vue";
import { Api } from "../api";
import type { Post } from "../api";


export default {
  name: "NewsView",
  components: {
    NavBar,
    PostCard,
    FooterMerge,
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
  async created() {
    const api = new Api();
    try {
      this.posts = await api.getPosts();
    } catch (error) {
      console.error('Error in NewsView created:', error);
    }
  },
};
</script>

<style>
.grid-containersv {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  position: relative;
}
</style>
