<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/teachers.png" uk-img></div>
    <div class="padleftright padtop padbot" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <h1>Informationen für Lehrerinnen und Lehrer</h1>
      <p>Startpunkt mit den wichtigsten Links und Informationen für Lehrerinnen und Lehrer der HTL Weiz. Für die Verwendung von eingeschränkten Bereichen wie dem Schulverwaltungstool müssen sich Lehrer zuerst registrieren und ein Benutzerkonto angelegt und vom Administrator aktiviert werden.</p>
        <div class="button-grid gridtopsp">
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">WebUntis</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Sokrates</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Schulveranstaltungen</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Office 365</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Portal Austria</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Formulare</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">Sokrates Bund</button>
          <button class="uk-button uk-button-default roundedl" uk-tooltip="title: ---; delay: 500" href="...">HTL Weiz Root Certificate</button>
        </div>
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";

export default {
  name: 'Teachers',
  components: {
    NavBar,
    Footer,
},
};
</script>

<style>
.gridtopsp {
  margin-top: 50px;
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
}
</style>
