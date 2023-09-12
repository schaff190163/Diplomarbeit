<template>
  <div class="dirspace">
    <div
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img :src="imgsrc" alt="" uk-cover />
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{avname}}</h3>
          <p>{{ avsubtitle }}</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "AvCard",
  props: {
    imgsrc: {
      type: String,
      required: true,
    },
    avname: {
      type: String,
      required: true,
    },
    avsubtitle: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped></style>
