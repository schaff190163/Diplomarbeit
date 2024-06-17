<template>
  <div class="uk-background-default uk-padding uk-padding-remove-bottom">
    <div class="uk-position-relative uk-dark">
      <ul class="uk-subnav uk-subnav-pill uk-flex-center" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">E²mily GT</a></li>
        <li><a href="#">E²mily ONE</a></li>
      </ul>
      <ul class="uk-switcher">
        <li class="uk-width-1-1">
          <div class="uk-grid uk-child-width-expand" uk-grid>
            <div>
              <img class="imagewid" src="/images/emilygt-2.jpg" alt="">
            </div>
            <div class="uk-width-1-3@m uk-padding text centerverti">
              <div class="uk-margin-large-right textblock">
                <h2>E²MILY - GT</h2>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                <!-- Other content -->
              </div>
            </div>
          </div>
        </li>
        <li class="uk-width-1-1">
          <div class="uk-grid uk-child-width-expand" uk-grid>
            <div>
              <img class="imagewid" src="/images/emilyone.jpg" alt="">
            </div>
            <div class="uk-width-1-3@m uk-padding text centerverti">
              <div class="uk-margin-large-right textblock">
                <h2>E²MILY - ONE</h2>
                <p><b>Höchstgeschwindigkeit: </b>37km/h</p>
                <p><b>Beschleunigung: </b>0 - 100 in 2.3 Sekunden</p>
                <!-- Other content -->
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

.hei {
  margin-top: 5vh;
  height: 65vh;
}

@media (max-width: 640px) {
  .hei {
    margin-top: 0vh;
    height: 65vh;
  }
  .textblock {
    line-height: 1.2;
  }
}

.centerverti {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagewid {
  max-width: 100%; /* Ensure images don't exceed their container */
  height: auto; /* Maintain aspect ratio */
}
</style>
