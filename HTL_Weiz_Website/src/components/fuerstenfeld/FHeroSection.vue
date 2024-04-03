<template>
  <div class="hei uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-cover uk-background-center-center uk-light uk-box-shadow-medium"
    data-src="/images/fuerstenfeld-5.jpg" uk-img>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'FHeroSection',
  };
</script>

<style>
.hei {
  height: calc(85vh);
}

@media (max-width: 600px) {  
  .hei {
    height: calc(65vh);
  }
}
</style>

