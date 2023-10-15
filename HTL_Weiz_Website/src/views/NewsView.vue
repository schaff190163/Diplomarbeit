<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="padleftright padtopbot padnav grid-containersv">
      <PostCard v-for="post in posts" :key="post.title"
        :title="post.title"
        :content="post.content"
        :imageSrc="post.featuredImageURL"
        ></PostCard>
      <FooterMerge></FooterMerge>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import PostCard from "@/components/PostCard.vue";
import FooterMerge from "@/components/FooterMerge.vue";
import { ref, onMounted } from "vue";
import { fetchData } from "@/api";

interface Post {
  id?: number;
  title: string;
  content: string;
  featuredImageURL: string;
}

export default {
  name: "NewsView",
  components: {
    NavBar,
    PostCard,
    FooterMerge,
  },
  setup() {
    const posts = ref<Post[]>([]);

    onMounted(async () => {
      try {
        const data = await fetchData();
        posts.value = data;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });

    return {
      posts,
    };
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
