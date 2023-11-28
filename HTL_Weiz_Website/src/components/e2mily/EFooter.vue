<template>
  <footer class="uk-background-secondary uk-height-medium" uk-sticky="position: bottom">
    <div class="text-wrapper uk-position-center-left uk-padding-large">
      <div>Impressum</div>
      <div>Lorem</div>
      <div>Ipsum</div>
      <div>Dolor</div>
      <div>set</div>
      <div>ipsum</div>
    </div>
    <div>
      <img class="uk-position-center" alt="Emily logo" src="/images/e2mily-logo.png" />
    </div>
    <div class="text-wrapper2 uk-position-center-right uk-padding-large uk-text-right">
      <div>Impressum</div>
      <div>Lorem</div>
      <div>Ipsum</div>
      <div>Dolor</div>
      <div>set</div>
      <div>ipsum</div>
    </div>
  </footer>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'EFooter',
};
</script>

<style>
.footer {
  position: relative;
  height: 100px;
}

.text-wrapper,
.text-wrapper2 {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
}
</style>
