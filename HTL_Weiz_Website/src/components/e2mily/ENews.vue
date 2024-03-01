<template>
  <div class="uk-background-muted uk-padding">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items uk-grid">

        <li class="uk-width-1-3">
          <div class="uk-panel">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/e2mily-projectgreen.jpg" uk-img>
                </div>
              </div>
              <div class="uk-card-body uk-text-left">
                <p class="uk-text-bold uk-padding-remove-bottom">11.11.2011</p>
                <p class="uk-card-title uk-padding-remove-top">E²MILY - GT im Greenroom des Project 1</p>
                <div>
                  <p> Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                    nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT.
                  </p>
                  <a href="#modal-example" class="linkcolor" uk-toggle>Mehr Lesen</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="uk-width-1-3">
          <div class="uk-panel">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/e2mily-projectgreen.jpg" uk-img>
                </div>
              </div>
              <div class="uk-card-body uk-text-left">
                <p class="uk-text-bold uk-padding-remove-bottom">11.11.2011</p>
                <p class="uk-card-title uk-padding-remove-top">E²MILY - GT im Greenroom des Project 1</p>
                <div>
                  <p> Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                    nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT.
                  </p>
                  <a href="#" class="linkcolor">Mehr Lesen</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        <li class="uk-width-1-3">
          <div class="uk-panel">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/e2mily-projectgreen.jpg" uk-img>
                </div>
              </div>
              <div class="uk-card-body uk-text-left">
                <p class="uk-text-bold uk-padding-remove-bottom">11.11.2011</p>
                <p class="uk-card-title uk-padding-remove-top">E²MILY - GT im Greenroom des Project 1</p>
                <div>
                  <p> Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                    nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT.
                  </p>
                  <a href="#" class="linkcolor">Mehr Lesen</a>
                </div>
              </div>
            </div>
          </div>
        </li>

       

      </ul>

      <a class="uk-position-center-left uk-position-small" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small" uk-slidenav-next uk-slider-item="next"></a>

    </div>
  </div>

  <div id="modal-example" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-1@s" uk-grid>
            <div class="uk-background-cover uk-height-medium" style="background-image: url('/images/e2mily-projectgreen.jpg');"></div>
            <div class="uk-padding-large">
                <h1>E²MILY - GT im Greenroom des Project 1</h1>
                <p>Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT. Daneben präsentierte Project 1 das „inklusive eKart“, das mit dem System SpaceDrive II und Steuerelementen von Paravan ausgestattet ist. Die Fahr- und Lenkbefehle werden elektrisch über einen zwei- oder vier-wege Joystick übertragen. So haben auch Menschen, die eine herkömmliche Lenkung nicht bedienen können, die Möglichkeit, am eKart-Sport teilzunehmen. Quellen: https://media.bmwm2cup.com/de/</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Box',
};
</script>

<style scoped>

.section {
  height: 750px;
}

.maindiv {
  background-color: rgb(226, 226, 226);
}

.linkcolor {
  color: #666666;
}

.linkcolor:hover {
  color: rgb(193, 193, 193);
}

</style>
