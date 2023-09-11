<template>
  <div class="dirspace">
  <div class="uk-child-width-1-2@m" uk-grid>
      <div>
          <div class="uk-card uk-card-default uk-width-1-1">
              <div class="uk-card-media-top">
                  <img src="src/assets/images/team/Blattner.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                  <h3 class="uk-card-title">Heimo T. Blattner</h3>
                  <p>Abteilungsvorstand</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AvCard",
  props: {
    imgsrc: String,
    azname: String,
  },
};
</script>

<style scoped></style>
