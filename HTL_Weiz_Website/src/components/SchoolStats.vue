<template>
  <div>
    <div class="sscentered-row padleftright">
      <div class="sselement">
        <h1 style="color: #f8f8f8;">900+</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Schüler</p>
      </div>
      <div class="separator"><hr class="uk-divider-vertical"></div>
      <div class="sselement mid">
        <h1 style="color: #f8f8f8;">100+</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Lehrer</p>
      </div>
      <div class="separator"><hr class="uk-divider-vertical"></div>
      <div class="sselement">
        <h1 style="color: #f8f8f8;">8</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Ausbildungszweige</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Schoolstats',
};
</script>

<style>
.sscentered-row {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-content: center;
}
.sselement {
  text-align: center;
  margin-left: 12vw;
  margin-right: 12vw;
}
</style>

