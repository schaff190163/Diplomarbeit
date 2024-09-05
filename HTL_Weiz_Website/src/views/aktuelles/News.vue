<template>
  <div>
    <!-- Navigation bar -->
    <NavBar></NavBar>
    
    <!-- Title for the news section -->
    <h1 class="padleftright">News an der HTL Weiz</h1>
    
    <!-- Container for the news posts -->
    <div class="padleftright padtop padbot grid-containersv">
      <!-- Show a message if no posts are available and loading is complete -->
      <div v-if="filteredPosts.length === 0 && !loading" class="no-posts-message padleftright">
        <p>Derzeit keine News!</p>
      </div>
      <!-- Iterate through each post and display it using Card_Post component -->
      <div v-for="post in filteredPosts" :key="post.id">
        <Card_Post 
          :post="post" 
          :coverImage="extractFirstImageUrl(post.content) || defaultImage"
        ></Card_Post>
      </div>
      <!-- Loader displayed while data is being fetched -->
      <div v-if="loading" class="loader-container uk-position-center">
        <Loader></Loader>
      </div>
    </div>
    
    <!-- Footer component -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead } from '@vueuse/head';
import NavBar from "../../components/NavBar.vue";
import Card_Post from "../../components/Card_Post.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import { WPApiHandler, type Post } from 'wpapihandler';

// State for storing posts and loading status
const posts = ref<Post[]>([]);
const loading = ref<boolean>(false);
const defaultImage = '../../public/images/e2mily-landing-new2.png'; // Default image

// WordPress API setup
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json", 
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};
const wp = new WPApiHandler(url, headers);

// Fetch all posts
async function fetchAllPosts() {
  loading.value = true;
  try {
    const response = await wp.get_posts();
    
    // Log the response from the API to the console
    console.log('API Response:', response);
    
    posts.value = response;

    // Set the page metadata
    useHead({
      title: 'News an der HTL Weiz',
      meta: [
        { name: 'description', content: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Updates von der HTL Weiz.' }
      ]
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    loading.value = false;
  }
}

// Extract the first image URL from the post content
function extractFirstImageUrl(content: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const match = imgRegex.exec(content);
  return match ? match[1] : null;
}

// Computed property to filter posts by the "news" tag
const newsTagId = 79; // Assuming 79 is the ID for the "news" tag
const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    return post.tags.includes(newsTagId); // Ensure tag matching by ID
  });
});

// Initial fetch of all posts
fetchAllPosts();
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

.no-posts-message {
  font-size: 1.2rem;
  color: #555;
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
