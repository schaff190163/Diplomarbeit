<template>
  <div>
    <NavBar></NavBar>
    <div class="wihero"></div>
    <h1 class="uk-text-lead zweigheading">Wirtschaftsingenieure</h1>
    <div class="grid-container">
      <div class="uk-grid uk-text-center">
        <div class="uk-width-auto@m">
          <QuickFacts></QuickFacts>
        </div>
        <div class="uk-width-1-3@m uk-flex uk-flex-middle">
          <AvCard avtitle="Harald Macher" avdesc="Abteilungsvorstand Wirtschaft"
            avimgsrc="src\assets\images\team\Macher.jpg"></AvCard>
        </div>
      </div>
    </div>
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
import AvCard from "@/components/AvCard.vue";

export default {
  name: 'WiView',
  components: {
    NavBar,
    Imprint,
    AuszeichnungsRow,
    Banner,
    QuickFacts,
    AbteilungsText,
    AvCard,
  },
};
</script>

<style>
.wihero {
  width: 100vw;
  height: 100vh;
  background-image: url("/src/assets/images/wi_hero.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.zweigheading {
  font-size: 40px;
  padding-left: 100px;
}
</style>
