<template>
  <div class="uk-card uk-card-default roundedl">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <h3 class="uk-card-title uk-text-large" v-html="decodeEntities(post.title)"></h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body" v-html="post.content">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    postImageSrc(): string | null {
      const matches = this.post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
      return matches ? matches[1] : null;
    },
  },
  methods: {
    decodeEntities(html: string): string {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.documentElement.textContent || '';
    },
  },
};
</script>

<style>
.uk-cover-small {
  max-width: 100%;
  max-height: 300px;
  padding: 20px;
}</style>
