<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/src/assets/images/teachers.png" uk-img></div>
    <div class="st-cont padleftright padtopbot">
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
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
}
.einr {
  margin-left: 20px;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
@media (max-width: 640px) {
  .button-grid {
  grid-template-columns: repeat(1, 1fr);
}
  .einr {
    margin-left: 0;
  }
}
</style>
