<template>
  <div>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin roundedl" uk-grid @click="openModal">
      <div class="uk-card-media-left uk-cover-container">
        <img :src="personel.image" alt="" uk-cover class="roundedl"/>
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ personel.name }}</h3>
          <p>{{ personel.title }}</p>
          <div class="uk-card-badge uk-label">{{ personel.short }}</div>
        </div>
      </div>
    </div>
    <div :id="personel.short" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>{{ personel.name }}</h3>
        <p>{{ personel.title }}</p>
        <p>{{ personel.short }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card_Staff",
  props: {
    personel: {
        type: Object,
        default: () => ({}),
    },
  },
  methods: {
    openModal() {
      UIkit.modal(`#${this.personel.short}`).show();
    }
  }
};
</script>

<style scoped>
</style>