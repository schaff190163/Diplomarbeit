<template>
  <div class="section uk-padding uk-padding-bottom-remove">
    <div class="" uk-grid>
      <div class="uk-width-1-1@s uk-margin">
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
            <img src="/src/assets/images/e2mily-model.png" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">E²MILY - GT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Frame from "./Frame.vue";

export default {
  name: 'EmptyComponent',
  components: {
    Frame
  },
};
</script>

<style scoped>

.section {
  height: 400px;
}


.title {
  text-align: center;
}

/* Adjustments for the card layout */
.uk-card-media-left {
  width: 50%; /* Set the width of the media container */
}

.uk-card-media-left img {
  max-width: 100%;
  height: auto;
}
</style>
