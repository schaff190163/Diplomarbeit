<template>
  <div>
    <div class="uk-inline roundedl uk-width-expand" @click="openModal">
      <img src="../../public/images/e2mily-landing-new2.png" height="550" class="roundedl uk-box-shadow-medium" alt="">
      <div class="gradient uk-position-cover roundedl"></div>
      <div class="uk-overlay uk-position-bottom uk-light">
        <h3 class="uk-card-title" v-html="decodeEntities(limitTitle(post.title))"></h3>
        <div class="uk-text-light" v-html="decodeEntities(limitContent(post.content))"></div>
        <div class="uk-button uk-button-text">Details</div>
      </div>
    </div>
    <div v-if="post && post.id" :id="'modal-' + post.id" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3 v-html="decodeEntities(post.title)"></h3>
        <div v-html="decodeEntities(post.content)"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card_Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    decodeEntities(html: string): string {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.documentElement.textContent || '';
    },
    limitTitle(title: string): string {
      return title.length > 50 ? title.substring(0, 450) + '...' : title;
    },
    limitContent(content: string): string {
      return content.length > 100 ? content.substring(0, 80) + '...' : content;
    },
    openModal() {
      if (this.post && this.post.id) {
        const modal = UIkit.modal('#modal-' + this.post.id);
        if (modal) {
          modal.show();
        } else {
          console.warn("Modal instance not found");
        }
      } else {
        console.warn("Post data or id is not available");
      }
    }
  },
});
</script>

<style scoped>
.gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(34, 30, 30));
}
</style>
