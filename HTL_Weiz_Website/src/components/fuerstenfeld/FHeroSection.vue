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
.hero {
  height: calc(100vh - 200px);
}
.spruch {
  font-size: calc(5vw + 2vh - 20px);
}

@media (min-width: 1500px) {
  .spruch {
    font-size: calc(4vw + 1vh - 20px);
  }
}

@media (max-width: 600px) {
  .spruch {
    font-size: calc(4vw + 1vh);
  }
  
  .hero {
    height: calc(70vh - 200px); /* Adjust height for smaller screens */
  }
}
</style>

