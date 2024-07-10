<template>
  <div id="app" class="uk-background-muted">
    <router-view /> 
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

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
.wordbreak{
  word-break: break-word;
}
.zweigheading {
  font-size: 40px;
}
.hero-imagez {
  width: 100%;
  height: auto;
}
.zweig-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
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
  .zweigheading {
    font-size: 30px;
  }
}
@media (min-width: 1500px) {
  .padleftright {
    padding-left: calc(20% - 150px) !important;
    padding-right: calc(20% - 150px) !important;
  }
}

@media (max-width: 800px) {
  .zweig-img {
    height: 40vh;
  }
}
@media (max-width: 530px) {
  .zweig-img {
    height: 27vh;
  }
}
</style>
