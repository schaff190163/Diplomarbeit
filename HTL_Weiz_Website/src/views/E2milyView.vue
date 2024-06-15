<template>
  <div class="body">
    <div class="">
        <ENavbar></ENavbar>
        <ELanding id="landing"></ELanding>
        <EModels id="model"></EModels>
        <ENews id="news"></ENews>
        <ETeam class="padbot" id="team"></ETeam>
        <ESponsor id="sponsor"></ESponsor>
        <EFooter></EFooter>
    </div>
  </div>
</template>

<script lang="ts">
import EFooter from "../components/e2mily/EFooter.vue";
import ELanding from "../components/e2mily/ELanding.vue"
import EModels from "../components/e2mily/EModels.vue";
import ENavbar from "../components/e2mily/ENavbar.vue";
import ENews from "../components/e2mily/ENews.vue";
import ESponsor from "../components/e2mily/ESponsor.vue"
import ETeam from "../components/e2mily/ETeam.vue";

export default {
  name: "E2mily",
  components: {
    EFooter,
    EModels,
    ENews,
    ETeam,
    ENavbar,
    ELanding,
    ESponsor,
  },
};
</script>

<style>

* {
  /* This rule adds a red outline to all elements that exceed their container's dimensions */
  /* outline: 2px solid red; */

}

</style>