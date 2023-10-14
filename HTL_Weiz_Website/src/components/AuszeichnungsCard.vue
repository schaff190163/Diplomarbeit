<template>
  <div class="image-container">
    <img class="image uk-box-shadow-medium roundedl" :src="imgsrc" :alt="azname" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuszeichnungsCard',
  props: {
    imgsrc: String,
    azname: String,
  },
};
</script>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  max-width: 125px;
  max-height: 125px;
}
</style>
