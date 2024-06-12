<template>
  <div>
    <!-- Navigation bar -->
    <NavBar></NavBar>
    <!-- Title for the news section -->
    <h1 class="padleftright">News an der HTL Weiz</h1>
    <!-- Container for the news posts -->
    <div class="padleftright padtop padbot grid-containersv">
      <!-- Iterate through each post and display it using Card_Post component -->
      <div v-for="post in posts" :key="post.id">
        <Card_Post v-if="post" :post="post"></Card_Post>
      </div>
      <!-- Loader displayed while data is being fetched -->
      <div v-if="loading" class="loader-container uk-position-center"><Loader></Loader></div>
    </div>
    <!-- Footer component -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import NavBar from "../../components/NavBar.vue";
import Card_Post from "../../components/Card_Post.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import { WPApiHandler, type Post } from 'wpapihandler';

// Set metadata
useHead({
  title: 'News an der HTL Weiz',
  meta: [
    { name: 'description', content: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Updates von der HTL Weiz. Erfahren Sie mehr über aktuelle Ereignisse und Neuigkeiten unserer Schule.' },
    { name: 'keywords', content: 'HTL Weiz, News, Nachrichten, Updates, Schule, Ereignisse' }
  ]
});

// Reactive references for posts and loading state
const posts = ref<Post[]>([]);
const loading = ref<boolean>(false);

// URL and headers for WordPress API
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

// Function to fetch and update posts
function update_posts() {
  loading.value = true;
  wp.get_posts()
    .then((response: Post[]) => {
      posts.value = response;
    })
    .finally(() => {
      loading.value = false;
    });
}

// Initial fetch of posts
update_posts();
</script>

<style>
.grid-containersv {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  position: relative;
}

.loader-container {
  text-align: center;
  margin-top: 50px;
}

@media screen and (max-width: 1320px) {
  .grid-containersv {
    gap: 15px;
  }
}
@media screen and (max-width: 1100px) {
  .grid-containersv {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
}
</style>
