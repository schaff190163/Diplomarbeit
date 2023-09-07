<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/src/assets/images/teachers.png" uk-img></div>
    <div class="st-cont">
      <h1>Informationen für Lehrerinnen und Lehrer</h1>
      <p>Startpunkt mit den wichtigsten Links und Informationen für Lehrerinnen und Lehrer der HTL Weiz. Für die Verwendung von eingeschränkten Bereichen wie dem Schulverwaltungstool müssen sich Lehrer zuerst registrieren und ein Benutzerkonto angelegt und vom Administrator aktiviert werden.</p>
        <div class="button-grid">
          <button class="uk-button uk-button-default">WebUntis</button>
          <button class="uk-button uk-button-default">Sokrates</button>
          <button class="uk-button uk-button-default">Schulveranstaltungen</button>
          <button class="uk-button uk-button-default">Office 365</button>
          <button class="uk-button uk-button-default">Portal Austria</button>
          <button class="uk-button uk-button-default">Formulare</button>
          <button class="uk-button uk-button-default">Sokrates Bund</button>
          <button class="uk-button uk-button-default">HTL Weiz Root Certificate</button>
        </div>
      </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";

export default {
  name: 'TeachersView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
  },
};
</script>

<style>
.st-cont {
  padding-top: 100px;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
}
.einr {
  margin-left: 20px;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 2 rows of 4 columns */
  gap: 10px;
}
</style>
