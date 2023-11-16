<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="teamheading">Direktion</h1>
    <DirektionCard class="padleftright padtopbot"></DirektionCard>
    <h1 class="teamheading">Abteilungsvorstände</h1>
    <div class="grid-containerav padleftright padtopbot">
      <AvCard avname="Harald Macher" avsubtitle="Abteilungsvorstand " imgsrc=""></AvCard>
      <AvCard avname="Christian Deimel" avsubtitle="Werkstättenleitung " imgsrc=""></AvCard>
      <AvCard avname="Josef Hierz" avsubtitle="Werkstättenleitung " imgsrc=""></AvCard>
      <AvCard avname="Bernhard Pertl" avsubtitle="Abteilungsvorstand " imgsrc=""></AvCard>
      <AvCard avname="Heimo T. Blattner" avsubtitle="Abteilungsvorstand " imgsrc=""></AvCard>
      <AvCard avname="Wolfgang Höllerbauer" avsubtitle="Werkstättenleitung " imgsrc=""></AvCard>
    </div>
    <h1 class="teamheading">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtopbot">
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import DirektionCard from "@/components/DirektionCard.vue";
import AvCard from "@/components/AvCard.vue";
import StaffCard from "@/components/StaffCard.vue" 
import FooterMerge from "@/components/FooterMerge.vue";

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
