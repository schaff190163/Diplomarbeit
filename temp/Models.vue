<template>
  <div class="uk-padding">
    <div uk-grid>
      <div class="uk-width-expand@m">
        <div class="uk-text-center">
          <h1>E²MILY Models</h1>
        </div>
      </div>
      <div class="uk-grid-match" uk-grid>
        <div class="uk-width-expand@m">
          <img src="/src/assets/images/e2mily-model.png" width="500" height="500">
        </div>
        <div class="uk-width-expand@m">
          <div class="uk-card uk-card-default uk-card-body">
            <h1 class="uk-card-title">E²mily GT</h1>
            <p>
              Sollicitudin blandit platea nostra luctus imperdiet. Phasellus duis a primis ultrices egestas iaculis urna suscipit magna magna integer quis. Sed ultrices faucibus bibendum dictumst nibh cursus dui erat libero nisl blandit. Hendrerit aliquam semper donec nisl metus. Mi velit orci penatibus scelerisque? Ligula suspendisse penatibus ultrices lacinia cursus curabitur cum! Commodo nec sed augue per odio tristique varius sociosqu pellentesque lacus.
            </p>
            <p>
              Vulputate erat vehicula in montes pharetra ac eros dolor velit sociis per. Suscipit congue pharetra, ante facilisis. Vulputate!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */
import Frame from "./Frame.vue";

export default {
  name: 'EmptyComponent',
  components: {
    Frame
},
};
</script>

<style>

.title {
  text-align: center;
  position: center;
}

</style>
