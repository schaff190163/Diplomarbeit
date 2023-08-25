<template>
  <div class="image-container">
    <img class="image" :src="imgsrc" :alt="azname" />
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
/* Styles for this component */
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* Adjust the height as needed */
}

.image {
  width: 100px;
  /* Adjust the width as needed */
  height: 100px;
  /* Adjust the height as needed */
}</style>
