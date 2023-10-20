<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <div class="wihero uk-background-width-1-1"></div>
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      data-src="/src/assets/images/et_hero.png" uk-img></div>
    <h1 class="uk-text-lead zweigheading">Elektrotechnik</h1>
    <QuickFacts class="padleftright" typ="HTL Tagesschule" dauer="5 Jahre" abschluss="Reife- und Diplomprüfung" vorraussetzungen="Abschluss der 8. Schulstufe" standort="Weiz"></QuickFacts>
    <AbteilungsText></AbteilungsText>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EtView',
  components: {
    NavBar: () => import(/* webpackChunkName: "navbar" */ "@/components/NavBar.vue"),
    QuickFacts: () => import(/* webpackChunkName: "quickfacts" */ "@/components/QuickFacts.vue"),
    AbteilungsText: () => import(/* webpackChunkName: "abteilungstext" */ "@/components/AbteilungsText.vue"),
    AvCard: () => import(/* webpackChunkName: "avcard" */ "@/components/AvCard.vue"),
    FooterMerge: () => import(/* webpackChunkName: "footermerge" */ "@/components/FooterMerge.vue"),
  },
};
</script>

<style>
.zweigheading {
  font-size: 40px;
  padding-left: 100px;
}
@media (max-width: 640px) {
  .zweigheading {
  font-size: 30px;
  padding-left: 35px;
  }
}
</style>
