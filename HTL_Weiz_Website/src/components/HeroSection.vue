<template>
  <div class="hei uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-cover uk-background-center-center uk-light uk-box-shadow-medium"
    data-src="/images/hero_people.png" uk-img>
  <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
  <h2 class="uk-text-light spruch">Gestalte deine Zukunft mit uns!</h2>
  </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'HeroSection',
  };
</script>

<style>
.hei {
  height: calc(100vh - 220px);
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
}
</style>
