<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <!-- Display the post title -->
          <img class="uk-border-circle" width="40" height="40" :src="post.authorAvatar" alt="Author Avatar" />
        </div>
        <div class="uk-width-expand">
          <!-- Display the post title -->
          <h3 class="uk-card-title uk-text-default uk-margin-remove-bottom">{{ post.title }}</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <!-- Display the post content -->
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineProps } from 'vue';

export default {
  name: 'PostCard',
  props: {
    // Define props for the post data
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Styles for this component */
</style>
