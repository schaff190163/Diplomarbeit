<template>
  <div class="ssbg">
    <div class="sscentered-row padleftright" uk-scrollspy="cls: uk-animation-fade; target < div; delay: 800;">
      <div class="sselement">
        <h1 style="color: #f8f8f8;">900+</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Schüler</p>
      </div>
      <div class="separator sssmallscreen"><hr class="uk-divider-vertical"></div>
      <div class="sselement mid sssmallscreen">
        <h1 style="color: #f8f8f8;">100+</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Lehrer</p>
      </div>
      <div class="separator"><hr class="uk-divider-vertical"></div>
      <div class="sselement">
        <h1 style="color: #f8f8f8;">8</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">Ausbildungszweige</p>
      </div>
      <div class="separator ssmidscreen"><hr class="uk-divider-vertical"></div>
      <div class="sselement ssmidscreen">
        <h1 style="color: #f8f8f8;">3000+</h1>
        <p style="color: #f8f8f8;" class="uk-text-light">AbsolventInnen</p>
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
  justify-content: center;
  align-items: center;
}
.sselement {
  text-align: center;
  margin: 0 20px;
  width: 200px;
}
.ssbg {
  background-color: #1BA373;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
}

@media (max-width: 850px) {
  .ssmidscreen {
    display: none;
  }
}

@media (max-width: 640px) {
  .sselement {
    width: calc(50vw - 40px);
    margin: 0 10px;
  }
  .sssmallscreen {
    display: none;
  }
}
</style>

