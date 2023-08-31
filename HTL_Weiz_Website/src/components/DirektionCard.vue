<template>
  <div class="uk-card uk-card-default uk-width-1-1 rounded grid-container">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title .uk-text-default uk-margin-remove-bottom">Dir. DI Gottfried Purkarthofer</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>Es ist nicht genug zu wissen - man muss auch anwenden. Es ist nicht genug zu wollen - man muss auch tun. (Johann Wolfgang von Goethe)</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DirektionCard',
  props: {
    imgsrc: String,
    azname: String,
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 20px;
  /* Adjust the value as needed */
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Three columns */
  gap: 20px;
  /* Gap between cards */
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
  position: relative;
  /* Set the container as a reference for positioning */
}
</style>
