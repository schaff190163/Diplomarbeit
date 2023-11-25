<template>
  <div class="uk-padding">
    <div>
      <div class="uk-width-expand@m">
        <div class="uk-text-center">
          <h1>News</h1>
        </div>
      </div>
      <div uk-slideshow>
        <ul class="uk-slideshow-items">
          <li>
            <div>
              <div class="uk-text-center uk-padding" uk-grid>
                <div class="uk-width-1-6"></div>
                <div class="uk-width-expand">
                  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin uk-padding" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                      <img src="/src/assets/images/e2mily-projectgreen.jpg" class="uk-position-cover" uk-cover>
                    </div>
                    <div>
                      <div class="uk-card-body uk-text-left">
                        <p class="uk-text-bold uk-padding-remove-bottom">11.11.2011</p>
                        <p class="uk-card-title uk-padding-remove-top">E²MILY - GT im Greenroom des Project 1</p>
                        <div>
                          <p> Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                              nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT. 
                          </p>
                          <p> 
                            Daneben präsentierte Project 1 das „inklusive eKart“, das mit dem System SpaceDrive II und Steuerelementen von Paravan ausgestattet ist. 
                            Die Fahr- und Lenkbefehle werden elektrisch über einen zwei- oder vier-wege Joystick übertragen.
                          </p>
                          <a href="#" class="uk-link-muted">Mehr Lesen</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-width-1-6"></div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="uk-text-center uk-padding" uk-grid>
                <div class="uk-width-1-6"></div>
                <div class="uk-width-expand">
                  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin uk-padding" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                      <img src="/src/assets/images/e2mily-projectgreen.jpg" class="uk-position-cover" uk-cover>
                    </div>
                    <div>
                      <div class="uk-card-body uk-text-left">
                        <p class="uk-text-bold uk-padding-remove-bottom">11.11.2011</p>
                        <p class="uk-card-title uk-padding-remove-top">E²MILY - GT im Greenroom des Project 1</p>
                        <div>
                          <p> Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                              nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. Eines davon war unser E-Kart E2MILY-GT. 
                          </p>
                          <p> 
                            Daneben präsentierte Project 1 das „inklusive eKart“, das mit dem System SpaceDrive II und Steuerelementen von Paravan ausgestattet ist. 
                            Die Fahr- und Lenkbefehle werden elektrisch über einen zwei- oder vier-wege Joystick übertragen.
                          </p>
                          <a href="#" class="uk-link-muted">Mehr Lesen</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-width-1-6"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Box',
};
</script>

<style scoped>
</style>