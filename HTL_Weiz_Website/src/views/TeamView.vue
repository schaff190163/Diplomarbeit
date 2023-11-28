<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="teamheading">Das Team der HTL Weiz</h1>
    <p class="padleftright">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <h1 class="teamheading">Direktion</h1>
    <DirektionCard class="padleftright padtop padbot"></DirektionCard>
    <h1 class="teamheading">Abteilungsvorstände</h1>
    <div class="grid-containerav padleftright padtop padbot">
      <AvCard avname="Harald Macher" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Macher.jpg"></AvCard>
      <AvCard avname="Christian Deimel" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Deimel.jpg"></AvCard>
      <AvCard avname="Josef Hierz" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Hierz.jpg"></AvCard>
      <AvCard avname="Bernhard Pertl" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Pertl.jpg"></AvCard>
      <AvCard avname="Heimo T. Blattner" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Blattner.jpg"></AvCard>
      <AvCard avname="Wolfgang Höllerbauer" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Hoellerbauer.jpg"></AvCard>
    </div>
    <h1 class="teamheading">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import DirektionCard from "../components/DirektionCard.vue";
import AvCard from "../components/AvCard.vue";
import StaffCard from "../components/StaffCard.vue" 
import FooterMerge from "../components/FooterMerge.vue";

export default {
  name: 'TeamView',
  components: {
    NavBar,
    DirektionCard,
    AvCard,
    StaffCard,
    FooterMerge,
},
};
</script>

<style>
.teamheading {
  font-size: 40px;
  padding-left: 100px;
  padding-top: 90px;
}
.grid-containerav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;
}
.grid-containerstaff {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
}
.nodarstello {
  display: none;
}
@media only screen and (max-width : 640px) {
  .grid-containerav {
  grid-template-columns: repeat(1, 1fr);
  }
  .grid-containerstaff {
  grid-template-columns: repeat(1, 1fr);
  }
  .teamheading {
  font-size: 1.5rem;
  padding-left:0px;
  text-align: center;
  }
}
</style>
