<template>
  <div>
    <div class="uk-inline roundedl" @click="openModal">
      <img src="/images/hero_people.png" class="roundedl" width="1800" height="1200" alt="">
      <div class="gradient uk-position-cover roundedl"></div>
      <div class="uk-overlay uk-position-bottom uk-light">
        <h3 class="uk-card-title" v-html="decodeEntities(post.title)"></h3>
        <div class="uk-text-light" v-html="decodeEntities(limitContent(post.content))"></div>
      </div>
    </div>
    <div v-if="post && post.id" :id="post.id" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>Title of Modal</h3>
        <p>hellohellohello</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card_Post',
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
    limitContent(content: string): string {
      const words = content.split(' ');
      if (words.length > 20) {
        return words.slice(0, 20).join(' ') + '...';
      }
      return content;
    },
    openModal() {
      if (this.post && this.post.id) {
        UIkit.modal('#' + this.post.id).show();
      } else {
        console.warn("Post data or id is not available");
      }
    }
  },
};
</script>

<style scoped>
  .gradient {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(34, 30, 30));
  }
</style>
