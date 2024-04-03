<template>
  <div style="background-color: #4B96D1;">
    <div class="sscentered-row padleftright">
      <div class="sselement">
        <h1 style="color: #f8f8f8;">HTL Weiz - Standort Fürstenfeld</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FSchoolstats',
};
</script>

<style>
.sscentered-row {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-content: center;
}
.sselement {
  text-align: center;
  margin-left: calc(9vw - 40px);
  margin-right: calc(9vw - 40px);
}

@media (max-width:640px) {
  .sscentered-row {
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-content: center;
  }
  .sselement {
    text-align: center;
    margin-left: calc(25vw - 50px);
    margin-right: calc(25vw - 50px);
  }
}
</style>
