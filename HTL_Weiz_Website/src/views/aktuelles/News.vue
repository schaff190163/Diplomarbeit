<template>
  <div>
    <NavBar></NavBar>
    <h1 class="padleftright">News an der HTL Weiz</h1>
    <div class="padleftright padtop padbot grid-containersv">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post"></PostCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import PostCard from "../../components/PostCard.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "News",
  components: {
    NavBar,
    PostCard,
    Footer,
  }
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { WPApiHandler, type Post } from 'wpapihandler';

const posts = ref<Post[]>([]);

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

wp.get_posts()
  .then((response: Post[]) => {
    posts.value = response;
  })
  .catch((error: Error) => {
    console.error('Error:', error);
  });
</script>

<style>
.grid-containersv {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  position: relative;
}
</style>