<template>
  <div class="hei uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-cover uk-background-center-center uk-light uk-box-shadow-medium"
    data-src="/images/HTL_Page/wide/homepicture.png" uk-img uk-parallax="bgy: -200">
  <div uk-scrollspy="cls: uk-animation-fade; target < h2; delay: 600;">
  <h2 class="uk-text-light spruch padleftright">Gestalte deine Zukunft mit uns!</h2>
  </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Hero_Home',
  };
</script>

<style>
.hei {
  height: calc(100vh - 220px);
}
.spruch {
  color: #f8f8f8 !important;
  font-size: calc(5vw + 2vh - 20px);
}

@media (min-width: 1500px) {
  .spruch {
    font-size: calc(4vw + 1vh - 30px);
  }
}

@media (max-width: 600px) {
  .spruch {
    font-size: calc(4vw + 1vh);
  }
}
</style>
