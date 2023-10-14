<template>
  <div>
    <div class="centered-row">
      <div class="element">
        <h1 style="color: #f8f8f8;">900+</h1>
        <p style="color: #f8f8f8;">Schüler</p>
      </div>
      <div class="separator"></div>
      <div class="element">
        <h1 style="color: #f8f8f8;">100+</h1>
        <p style="color: #f8f8f8;">Lehrer</p>
      </div>
      <div class="separator"></div>
      <div class="element">
        <h1 style="color: #f8f8f8;">8</h1>
        <p style="color: #f8f8f8;">Ausbildungszweige</p>
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
.centered-row {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1BA373ff;
  padding-top: 20px;
  padding-bottom: 20px;
}

.element {
  text-align: center;
  padding: 0 15px;
  /* Adjust this value for spacing between elements */
}

.separator {
  width: 23%;
  height: 100%;
  /* Add margin to the separator if needed */
}
</style>

