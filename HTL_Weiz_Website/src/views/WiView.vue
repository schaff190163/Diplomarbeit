<template>
  <div>
    <NavBar></NavBar>
    <div class="wihero"></div>
    <h1 class="uk-text-lead zweigheading">Wirtschaftsingenieure</h1>
    <QuickFacts></QuickFacts>
    <AbteilungsText></AbteilungsText>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import Banner from "@/components/Banner.vue";
import QuickFacts from "@/components/QuickFacts.vue";
import AbteilungsText from "@/components/AbteilungsText.vue";

export default {
  name: 'WiView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    Banner,
    QuickFacts,
    AbteilungsText,
  },
};
</script>

<style>
.wihero {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  /* Limit the max-width to the viewport's width */
  background-image: url("/src/assets/images/wi_hero.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.zweigheading {
  font-size: 50px;
  padding-left: 100px;
}
</style>
