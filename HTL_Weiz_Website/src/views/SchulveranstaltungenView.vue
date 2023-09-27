<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div>
      <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
    </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import PostCard from "@/components/PostCard.vue";
import { ref, onMounted } from 'vue';
import { fetchPosts, Posts } from '@/api';

export default {
  name: 'SchulveranstaltungenView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    PostCard,
  },
  setup() {
    const loading = ref(true);
    const posts = ref<Posts[]>([]);

    onMounted(async () => {
      try {
        const fetchedPosts = await fetchPosts();
        posts.value = fetchedPosts;
        loading.value = false;
      } catch (error) {
        console.error("Error fetching posts:", error);
        loading.value = false;
      }
    });

    return {
      loading,
      posts,
    };
  },
};
</script>

<style></style>
