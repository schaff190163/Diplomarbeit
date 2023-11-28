<template>
  <div class="">
    <div class="uk-position-relative uk-visible-toggle uk-dark uk-padding" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
      <ul class="uk-slider-items uk-grid uk-padding">
          <li class="uk-width-3-4">
              <div class="uk-panel">
                  <img src="/src/assets/images/e2mily-model-edited.png" width="1920" height="1080" alt="">
                  <div class="uk-position-center-right uk-margin-large-right">
                      <h2 uk-slider-parallax="x: 100,-100">E²MILY - GT</h2>
                      <p uk-slider-parallax="x: 200,-200"><b class="">Höchstgeschwindigkeit: </b>37km/h</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Höchstgeschwindigkeit: </b>37km/h</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Höchstgeschwindigkeit: </b>37km/h</p>
                  </div>
              </div>
          </li>
          <li class="uk-width-3-4">
              <div class="uk-panel">
                  <img src="/src/assets/images/e2mily-model-edited.png" width="1920" height="1080" alt="">
                  <div class="uk-position-center-right uk-margin-large-right">
                      <h2 uk-slider-parallax="x: 100,-100">E²MILY - One</h2>
                      <p uk-slider-parallax="x: 200,-200"><b>Höchstgeschwindigkeit: </b>37km/h</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Höchstgeschwindigkeit: </b>37km/h</p>
                      <p uk-slider-parallax="x: 200,-200"><b>Höchstgeschwindigkeit: </b>37km/h</p>
                  </div>
              </div>
          </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-dark" href uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-dark" href uk-slidenav-next uk-slider-item="next"></a>
    </div>
  </div>
</template>

<script lang="ts">
import Frame from "./Frame.vue";

export default {
  name: 'EmptyComponent',
  components: {
    Frame
  },
};
</script>

<style scoped>
</style>
