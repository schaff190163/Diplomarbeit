<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="padleftright padtopbot padnav grid-containersv">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post"></PostCard>
      </div>
      <FooterMerge></FooterMerge>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import PostCard from "@/components/PostCard.vue";
import FooterMerge from "@/components/FooterMerge.vue";
import { Api } from "@/api";
import type { Post } from "@/api";

export default {
  name: "NewsView",
  components: {
    NavBar,
    PostCard,
    FooterMerge,
  },
  data() {
    return {
      posts: [] as Post[], // Specify the type here
    };
  },
  created() {
    const api = new Api();
    api.getPosts().then((posts: Post[]) => {
      this.posts = posts;
    });
  }
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
