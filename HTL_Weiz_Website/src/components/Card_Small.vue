<template>
  <div>
    <div class="uk-card uk-card-body uk-card-default smallcard roundedl" :uk-tooltip="'title: ' + tooltipdesc + '; delay: 500'">
      <img :src="imgsrc" class="uk-position-center logopad roundedl" width="" height="" :alt="azname">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card_Small',
  props: {
    imgsrc: String,
    azname: String,
    tooltipdesc: String,
  },
};
</script>

<style scoped>
.smallcard{
    width: calc(80px + 2vw);
    height: calc(80px + 2vh);
}
</style>
