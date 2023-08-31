<template>
  <div class="image-container uk-box-shadow-medium">
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
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
}
.image {
  width: 100px;
  height: 100px;
}
</style>
