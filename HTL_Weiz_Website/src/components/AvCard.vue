<template>
  <div>
    <div class="uk-card uk-card-default rounded body">
      <div class="uk-card-media-top rounded mediasp">
        <img :src="avimgsrc" width="150" height="150" alt="">
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ avtitle }}</h3>
        <p>{{ avdesc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AvCard',
  props: {
    avtitle: {
      type: String,
      required: true,
    },
    avdesc: {
      type: String,
      required: true,
    },
    avimgsrc: {
      type: String,
      required: true,
    },
  }, // Close the props object with a comma
};
</script>

<style>
.rounded {
  border-radius: 20px;
  /* Adjust the value as needed */
}
.body {
  width: 300px;
  height: 300px;
  justify-content: center;
  background-color: blue;
}
.mediasp {
  margin-top: 20px;
}
</style>
