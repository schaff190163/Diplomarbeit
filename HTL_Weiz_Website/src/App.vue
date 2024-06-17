<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

// Set metadata
useHead({
  title: 'HTL Weiz',
  meta: [
    { name: 'description', content: 'Welcome to the HTL Weiz website. Stay updated with the latest news, events, and educational opportunities at HTL Weiz.' },
    { name: 'keywords', content: 'HTL Weiz, education, news, events, technology, engineering' }
  ]
});
</script>

<style>
.padtop {
  padding-top: 32px !important;
}

.padbot {
  padding-bottom: 32px !important;
}

.padleftright {
  padding-left: 100px !important;
  padding-right: 100px !important;
}

.roundedl {
  border-radius: 18px !important;
}

.mpheading {
  font-size: clamp(1rem, 10vw, 2rem); 
}

@media (max-width: 640px) {
  .padtop {
    padding-top: 10px !important;
  }

  .padbot {
    padding-bottom: 8px !important;
  }

  .padleftright {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }
  
  .mpheading {
    font-size: clamp(1rem, 10vw, 1.5rem); 
  }
}

@media (min-width: 1500px) {
  .padleftright {
    padding-left: calc(20% - 150px) !important;
    padding-right: calc(20% - 150px) !important;
  }
}
th, h1, h2, h3, h4, h5, h6, p, td{
  word-break: break-word;
}
.zweigheading {
  font-size: 40px;
}

@media (max-width: 640px) {
  .zweigheading {
    font-size: 30px;
  }
}

.hero-imagez {
  width: 100%;
  height: auto;
}

.hero-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the image covers the container without being distorted */
  object-position: center; /* Centers the image */
}

@media (max-width: 800px) {
  .hero-img {
    height: 40vh; /* Adjust this if you want a different height on smaller screens */
  }
}

@media (max-width: 530px) {
  .hero-img {
    height: 27vh; /* Adjust this if you want a different height on smaller screens */
  }
}
</style>
