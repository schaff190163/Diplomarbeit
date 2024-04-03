<template>
  <div class="uk-background-default uk-padding uk-padding-remove-bottom">
    <div class="uk-position-relative uk-dark">
      <ul class="uk-subnav uk-subnav-pill uk-flex-center" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">E²mily GT</a></li>
        <li><a href="#">E²mily ONE</a></li>
      </ul>
      <ul class="uk-switcher hei">
        <li class="uk-width-1">
          <div class="uk-grid uk-child-width-expand" uk-grid>
            <div>
              <img src="/images/emilygt-2.jpg" width="1920" alt="">
            </div>
            <div class="uk-width-1-3@m uk-padding text">
              <h2>E²MILY - GT</h2>
              <div class="uk-margin-large-right textblock">
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
              </div>
            </div>
          </div>
        </li>
        <li class="uk-width-1">
          <div class="uk-grid uk-child-width-expand" uk-grid>
            <div>
              <img src="/images/emilyone.jpg" width="1920" height="800" alt="">
            </div>
            <div class="uk-width-1-3@m uk-padding text">
              <h2>E²MILY - One</h2>
              <div class="uk-margin-large-right textblock">
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'EModels',
};
</script>

<style scoped>
.uk-grid {
  padding-left: calc(10vw);
}

.hei {
  margin-top: 12vh;
  height: 65vh;
}

@media (max-width: 640px) {
  .hei {
    margin-top: 0vh;
    height: 75vh;
  }
  .uk-grid {
    display: flex;
    justify-content: center; 
  }
  .textblock {
    line-height: 1.2;
  } 
}
</style>
