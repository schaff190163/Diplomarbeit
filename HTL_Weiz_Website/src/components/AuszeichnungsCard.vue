<template>
  <div class="image-container">
    <img class="image uk-box-shadow-medium" :src="imgsrc" :alt="azname" />
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
  width: 120px;
  height: 120px;
}</style>

