<template>
  <div class="uk-padding">
    <div uk-grid>
        <div class="uk-width-auto@m">
            <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                <li><a href="#">Hauptsponsor</a></li>
                <li><a href="#">Platin</a></li>
                <li><a href="#">Gold</a></li>
                <li><a href="#">Silber</a></li>
            </ul>
        </div>
        <div class="uk-width-expand@m">
            <ul id="component-tab-left" class="uk-switcher">
              <li>
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
                  <ul class="uk-slider-items uk-flex-center uk-grid">
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/amt_sponsor.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/rosendahl_sponsor.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/evon_sponsor.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/unger_sponsor.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/woodsolutions_sponsor.png" width="200" height="200" alt="">
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
                  <ul class="uk-slider-items uk-flex-center uk-grid">
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/AMAG_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/antonpaar_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/binder_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/BR_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/FranzMorrat_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/isabellenhuette_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/MAGNA_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/SBG_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/tectos_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/voltlabor_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="uk-panel">
                        <img src="/images/sponsor/platin/Zeiss_platin.png" width="200" height="200" alt="">
                      </div>
                    </li>
                  </ul>

                  <a class="uk-position-center-left uk-position-small acolor" uk-slidenav-previous uk-slider-item="previous"></a>
                  <a class="uk-position-center-right uk-position-small acolor" uk-slidenav-next uk-slider-item="next"></a>

                </div>
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'ESponsor',
};
</script>


<style scoped>
/* Add scoped attribute to style tag to ensure styles are scoped to this component */

.back_color {
  background-color: rgb(226, 226, 226);
}

.acolor {
  color: #b3b3b3;
}

.acolor:hover {
  color: #cecece;
}

</style>
