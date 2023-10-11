<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <h3 class="uk-card-title uk-text-large">{{ title }}</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <div>{{ content }}</div>
    </div>
    <div class="uk-position-relative uk-visible-toggle uk-light padbotpost" tabindex="-1" uk-slider="center: true">
      <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
        <li class="uk-width-3-4">
          <div class="uk-cover-container">
            <img :src="imageSrc" alt="" uk-cover>
            <div class="uk-position-center uk-panel"></div>
          </div>
        </li>
      </ul>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous
        uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slider-item="next"></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PostCard',
  props: {
    title: String,
    content: String,
    imageSrc: String,
  },
};
</script>

<style>
.padbotpost {
  padding-bottom: 20px;
}
</style>
