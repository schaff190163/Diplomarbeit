<template>
  <div class="hei uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-center-center uk-light"
    data-src="/src/assets/images/e2mily-landing.jpg" uk-img>
    <div>
      <h2 class="landingtext">E²MILY</h2>
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
  height: 100vh;
}

.landingtext {
  font-weight: bold;
  font-size: 200px;
  letter-spacing: 50px;
}
</style>
