<template>
  <div>
    <!-- Navigation bar -->
    <NavBar></NavBar>
    <!-- Post content -->
    <div class="post-content padleftright padtop padbot">
      <h1 v-if="post" v-html="decodeEntities(post.title)"></h1>
      <div v-if="post" v-html="decodeEntities(post.content)"></div>
      <div v-else class="loader-container uk-position-center">
        <Loader v-if="loading"></Loader>
        <p v-else>No post found.</p>
      </div>
    </div>

    <!-- Display the carousel if there are images -->
    <PictureCarousel v-if="postImages.length > 0" :images="postImages" />
    
    <!-- Footer component -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import Loader from '../../components/Loader.vue';
import PictureCarousel from '../../components/PictureCarousel.vue';
import { WPApiHandler, type Post } from 'wpapihandler';

// Reactive references
const post = ref<Post | null>(null);
const loading = ref<boolean>(false);

// Get the route parameters
const route = useRoute();
const postId = route.params.id as string;

// URL and headers for WordPress API
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

// Function to fetch the post data
async function fetchPost(id: string) {
  loading.value = true;
  try {
    const response = await wp.get_posts(Number(id));
    if (response.length > 0) {
      post.value = response[0];
    } else {
      post.value = null;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    post.value = null;
  } finally {
    loading.value = false;
  }
}

// Helper function to extract image URLs from HTML content
function extractImageUrlsFromContent(htmlContent: string): string[] {
  const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
  const images = doc.querySelectorAll('img'); // Select all <img> tags
  const imageUrls: string[] = [];

  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      imageUrls.push(src); // Collect the src attribute value
    }
  });

  return imageUrls;
}

// Computed property to get the images from the post content
const postImages = computed(() => {
  return post.value ? extractImageUrlsFromContent(post.value.content) : [];
});

// Fetch the post data when the component is mounted
onMounted(() => {
  fetchPost(postId);
});

// Decode HTML entities
function decodeEntities(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.documentElement.textContent || '';
}
</script>

<style scoped>
.post-content {
  max-width: 800px;
  margin: auto;
}

.loader-container {
  text-align: center;
  margin-top: 50px;
}
</style>
