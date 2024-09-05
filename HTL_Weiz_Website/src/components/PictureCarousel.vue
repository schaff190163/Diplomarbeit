<template>
  <div class="padcarousel padbot">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
      <div class="uk-slideshow-items">
        <div v-for="(image, index) in images" :key="index">
          <img :src="image" alt="" uk-cover>
        </div>
      </div>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  
  export default defineComponent({
    name: 'PictureCarousel',
    props: {
      images: {
        type: Array as PropType<string[]>,
        default: () => [],
      },
    },
  });
  </script>
  
  <style scoped>
  .uk-slideshow-items img {
    width: 100%;
    height: auto;
  }
  .padcarousel{
    padding-left: calc(20vw - 30px);
    padding-right: calc(20vw - 30px);
  }
  </style>
  