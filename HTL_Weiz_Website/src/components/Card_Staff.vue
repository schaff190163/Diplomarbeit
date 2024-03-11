<template>
  <div>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin roundedl" uk-grid @click="openModal">
      <div class="uk-card-media-left uk-cover-container">
        <img :src="imgsrc" alt="" uk-cover class="roundedl"/>
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ name }}</h3>
          <p>{{ title }}</p>
          <div class="uk-card-badge uk-label">{{ short }}</div>
        </div>
      </div>
    </div>
    <div :id="short" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>{{ name }}</h3>
        <p>{{ title }}</p>
        <p>{{ short }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card_Staff",
  props: {
    imgsrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    }
  },
  methods: {
    openModal() {
      UIkit.modal('#' + this.short).show();
    }
  }
};
</script>

<style scoped>
</style>