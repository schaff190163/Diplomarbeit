<template>
  <div class="body">
    <div class="">
        <ENavbar></ENavbar>
        <ELanding id="landing"></ELanding>
        <EModels id="model"></EModels>
        <ENews id="news"></ENews>
        <ETeam id="team"></ETeam>
        <ESponsor id="sponsor"></ESponsor>
        <EFooter></EFooter>
    </div>
  </div>
</template>

<script lang="ts">
import EFooter from "../components/e2mily/EFooter.vue";
import EModels from "../components/e2mily/EModels_v2.vue";
import ENews from "../components/e2mily/ENews.vue";
import ETeam from "../components/e2mily/ETeam.vue";
import ENavbar from "../components/e2mily/ENavbar.vue";
//import Contact from "../components/e2mily/EContact.vue"
import ELanding from "../components/e2mily/ELanding.vue"
import ESponsor from "../components/e2mily/ESponsor.vue"

export default {
  name: "E2mily",
  components: {
    EFooter,
    EModels,
    ENews,
    ETeam,
    ENavbar,
    //EContact,
    ELanding,
    ESponsor,
  },
};
</script>

<style>
</style>