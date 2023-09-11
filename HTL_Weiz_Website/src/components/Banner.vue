<template>
  <div>
    <div class="orange-stripe">
      <img class="centered-image" src="/src/assets/images/logo_wi_250.png" alt="Centered Image">
    </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: "Banner",
  components: {
    /*,*/
  },
};
</script>

<style scoped>
.orange-stripe {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: orange;
  width: 100%;
}

.centered-image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  /* Centers the image horizontally */
  position: relative;
  z-index: 1;
  /* Ensures the image is on top of the stripe */
}
</style>
