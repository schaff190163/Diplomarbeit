<template>
  <div>
    <NavBar></NavBar>
    <div class="anmeldungcontainer">
      <div class="zweig">
        <button class="uk-button uk-button-default" type="button">Ich interessiere mich für:</button>
          <div uk-dropdown="animation: uk-animation-slide-top-small; animate-out: true">
          <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Wirtschaftsingenieure</a></li>
            <li><a href="#">Elektrotechnik</a></li>
            <li><a href="#">Informationstechnologie</a></li>
            <li><a href="#">Maschinenbau - Umwelttechnik</a></li>
            <li><a href="#">Maschinenbau - Anlagentechnik</a></li>
            <li><a href="#">Maschinenbau - Automatisierungstechnik</a></li>
            <li><a href="#">Abendschule - Wirtschaftsingenieure</a></li>
            <li><a href="#">Fachschule - Mechatronik</a></li>
          </ul>
  </div>
      </div>
    </div>
  <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import FooterMerge from "../components/FooterMerge.vue";

export default {
  name: 'AnmeldungView',
  components: {
    NavBar,
    FooterMerge,
  },
};
</script>

<style></style>
