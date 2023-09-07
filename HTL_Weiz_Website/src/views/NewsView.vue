<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <!-- Render the fetched data here -->
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.content.rendered"></div>
      </div>
    </div>
    <PostCard></PostCard>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import PostCard from "@/components/PostCard.vue";
import { fetchPosts } from "@/api"; // Import your fetchPosts function

export default {
  name: 'NewsView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    PostCard
},
  data() {
    return {
      posts: [] as Posts[], // Explicitly define the type as Posts[]
    };
  },
  async mounted() {
    try {
      const posts = await fetchPosts() as Posts[]; // Type assertion here
      this.posts = posts;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
/* Styles for this component */
</style>
