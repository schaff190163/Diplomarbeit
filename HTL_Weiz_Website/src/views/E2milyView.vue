<template>
  <div class="body">
    <div class="">
        <Navbar></Navbar>
        <Landing></Landing>
        <Models></Models>
        <News></News>
        <Team></Team>
        <Sponsor></Sponsor>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import Footer from "../components/e2mily/Footer.vue";
import Models from "../components/e2mily/Models.vue";
import News from "../components/e2mily/News.vue";
import Team from "../components/e2mily/Team.vue";
import Navbar from "../components/e2mily/E2milyNavbar.vue";
//import Contact from "../components/e2mily/Contact.vue"
import Landing from "../components/e2mily/Landing.vue"
import Sponsor from "../components/e2mily/Sponsor.vue"

export default {
  name: "E2mily",
  components: {
    Footer,
    Models,
    News,
    Team,
    Navbar,
    //Contact,
    Landing,
    Sponsor,
  },
};
</script>

<style>
</style>