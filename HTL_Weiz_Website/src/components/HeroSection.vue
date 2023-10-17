<template>
  <div class="hei uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-cover uk-background-center-center uk-light uk-box-shadow-medium"
    data-src="src\assets\images\facade.png" uk-img>
  <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
  <h2 class="uk-text-light spruch" uk-scrollspy-class="uk-animation-slide-bottom">Qualität in einem humanen Umfeld.</h2>
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
  height: calc(100vh - 215px);
}
.spruch {
  font-size: calc(5vw + 1vh);
  padding-left: 15px;
  padding-right: 15px;
}
</style>
