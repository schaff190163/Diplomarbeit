<template>
    <div>
      <!-- Navigation bar -->
      <NavBar></NavBar>
      <HeaderBanner></HeaderBanner>
  
      <!-- Post title -->
      <h1 class="padleftright">{{ post?.title }}</h1>
  
      <!-- Post content -->
      <div class="padleftright padtop padbot">
        <p v-html="post?.content"></p>
  
        <!-- Loader displayed while data is being fetched -->
        <div v-if="loading" class="loader-container uk-position-center">
          <Loader></Loader>
        </div>
      </div>
  
      <!-- Footer -->
      <Footer></Footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useHead } from '@vueuse/head';
  import NavBar from "../../components/NavBar.vue";
  import Footer from "../../components/Footer.vue";
  import Loader from "../../components/Loader.vue";
  import HeaderBanner from '../../components/HeaderBanner.vue';
  import { WPApiHandler, type Post } from 'wpapihandler';
  
  // State for storing the post and loading status
  const post = ref<Post | null>(null);
  const loading = ref<boolean>(false);
  
  // WordPress API setup
  const url = 'https://dev.htlweiz.at/wordpress';
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
  };
  const wp = new WPApiHandler(url, headers);
  
  // Fetch the post tagged with "aufnahmeverfahren"
  function fetch_aufnahmeverfahren_post() {
    loading.value = true;
    wp.get_posts(undefined, ['aufnahmeverfahren'])
      .then((response: Post[]) => {
        if (response.length > 0) {
          post.value = response[0];
  
          // Set the page metadata
          useHead({
            title: post.value.title,
            meta: [
              { name: 'description', content: post.value.excerpt.replace(/<[^>]+>/g, '') || 'Aufnahmeverfahren - HTL Weiz' }
            ]
          });
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }
  
  // Initial fetch of the "Aufnahmeverfahren" post
  fetch_aufnahmeverfahren_post();
  </script>

  