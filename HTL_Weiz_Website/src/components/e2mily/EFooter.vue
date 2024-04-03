<template>
    <footer class="uk-background-secondary uk-height-medium fheight" uk-sticky="position: bottom">
    <div class="text-wrapper uk-position-center-left uk-padding-large">
      <div>Impressum</div>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </div>
    <div class="logo">
      <img class="uk-position-center" alt="Emily logo" src="/images/e2mily-logo.png" />
    </div>
    <div class="text-wrapper2 uk-position-center-right uk-padding-large">
      <div>Ansprechspartner:</div>
      <div>AV DI Harald Macher</div>
    </div>
  </footer>
</template>

<script lang="ts">

export default {
  name: 'EFooter',
};
</script>

<style>
.text-wrapper {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  text-align: left;
}

.text-wrapper2 {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  text-align: right;
}

.fheight {
  height: 30vh;
}

@media (max-width: 575px) {
  .logo {
    display: none !important;;
  }
}

@media (max-width: 400px) {
  .text-wrapper {
    text-align: center;
  }
  .text-wrapper2 {
    text-align: center;
  }
}
</style>

