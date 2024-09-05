<template>
  <div>
    <!-- Card layout -->
    <div class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2 uk-margin roundedl staffcard" uk-grid @click="openModal">
      <div class="uk-card-media-left uk-cover-container">
        <img :src="personnel.image" alt="" uk-cover class="roundedl card-image"/>
        <canvas width="600" height="420"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ personnel.name }}</h3>
          <p>{{ personnel.title }}</p>
          <div class="uk-card-badge uk-label">{{ personnel.short }}</div>
          <a class="uk-button uk-button-text">Details</a>
        </div>
      </div>
    </div>

    <!-- Modal layout -->
    <div :id="personnel.short" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>{{personnel.title}} {{ personnel.name }} ({{ personnel.short }})</h3>
        <div class="modal-content">
          <div class="modal-image">
            <img :src="personnel.image" alt="" class="roundedl uniform-height" />
          </div>
          <ul class="modal-details uk-text-light uk-list">
            <li v-if="personnel.location"><span uk-icon="location"></span>  {{ personnel.location }}</li>
            <li v-if="personnel.description"><span uk-icon="comments"></span>  {{ formatDescription(personnel.description) }}</li>
            <li v-if="personnel.office_hours"><span uk-icon="clock"></span>  {{ personnel.office_hours }}</li>
            <li v-if="personnel.email_to"><span uk-icon="mail"></span>  <a :href="`mailto:${personnel.email_to}`">{{ personnel.email_to }}</a></li>
            <li v-if="personnel.phone"><span uk-icon="receiver"></span>  {{ personnel.phone }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UIkit from 'uikit';

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
    },
    formatDescription(description: string): string {
      return description.replace(/;/g, ', ');
    },
  },
};
</script>

<style scoped>
.staffcard {
  height: 230px !important;
}
.card-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
}
.modal-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.modal-image {
  flex: 0 0 auto;
  width: 150px;
  height: 170px;
  overflow: hidden;
  position: relative;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loader-container {
  text-align: center;
  margin-top: 50px;
}
</style>
