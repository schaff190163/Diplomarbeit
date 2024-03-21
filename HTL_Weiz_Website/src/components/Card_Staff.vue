<template>
  <div>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin roundedl" uk-grid @click="openModal">
      <div class="uk-card-media-left uk-cover-container">
        <img :src="personnel.image" alt="" uk-cover class="roundedl"/>
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ personnel.name }}</h3>
          <p>{{ personnel.title }}</p>
          <div class="uk-card-badge uk-label">{{ personnel.short }}</div>
        </div>
      </div>
    </div>
    <div :id="personnel.short" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>{{ personnel.name }}</h3>
        <p>{{ personnel.title }}</p>
        <p>{{ personnel.short }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card_Staff",
  props: {
    personnel: {
        type: Object,
        default: () => ({}),
    },
  },
  methods: {
    openModal() {
      UIkit.modal(`#${this.personnel.short}`).show();
    }
  }
};
</script>

<style scoped>
</style>