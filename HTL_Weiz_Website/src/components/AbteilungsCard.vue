<template>
  <div class="uk-card uk-card-default uk-width-1-1">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img class="" width="40" height="40" :src="imgsrc">
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title .uk-text-default uk-margin-remove-bottom">{{ title }}</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>{{ description }}</p>
    </div>
    <div class="uk-card-footer">
      <router-link :to="detailsrc" class="uk-button uk-button-text">Details</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AbteilungsCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgsrc: {
      type: String,
      required: true,
    },
    detailsrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
/* Styles for this component */
.rounded {
  border-radius: 20px;
  /* Adjust the value as needed */
}
</style>
