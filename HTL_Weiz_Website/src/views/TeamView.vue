<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    
    <NavBarSpace class="navbarspace"></NavBarSpace>
    <h1 class="teamheading">Direktion</h1>
    <DirektionCard class="space"></DirektionCard>
    <h1 class="teamheading">Abteilungsvorstände</h1>
    <div class="grid-containerav space">
      <AvCard avname="Harald Macher" avsubtitle="Abteilungsvorstand " imgsrc="src\assets\images\team\Macher.jpg"></AvCard>
      <AvCard avname="Christian Deimel" avsubtitle="Werkstättenleitung " imgsrc="src\assets\images\team\Deimel.jpg"></AvCard>
      <AvCard avname="Josef Hierz" avsubtitle="Werkstättenleitung " imgsrc="src\assets\images\team\Hierz.jpg"></AvCard>
      <AvCard avname="Bernhard Pertl" avsubtitle="Abteilungsvorstand " imgsrc="src\assets\images\team\Pertl.jpg"></AvCard>
      <AvCard avname="Heimo T. Blattner" avsubtitle="Abteilungsvorstand " imgsrc="src\assets\images\team\Blattner.jpg"></AvCard>
      <AvCard avname="Wolfgang Höllerbauer" avsubtitle="Werkstättenleitung " imgsrc="src\assets\images\team\Hoellerbauer.jpg"></AvCard>
    </div>
    <h1 class="teamheading nodarstello">Lehrpersonal</h1>
    <div class="grid-containerstaff space nodarstello">
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
    </div>
    <AuszeichnungsRow></AuszeichnungsRow>
    <Imprint></Imprint>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Imprint from "@/components/Imprint.vue";
import DirektionCard from "@/components/DirektionCard.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import NavBarSpace from '@/components/NavBarSpace.vue'
import AvCard from "@/components/AvCard.vue";
import StaffCard from "@/components/StaffCard.vue" 

export default {
  name: 'TeamView',
  components: {
    NavBar,
    Imprint,
    DirektionCard,
    AuszeichnungsRow,
    NavBarSpace,
    AvCard,
    StaffCard
},
};
</script>

<style>
.space {
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
}
.teamheading {
  font-size: 40px;
  padding-left: 100px;
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
  display:none;
}
@media only screen and (max-width : 640px) {
  .space{
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 15px;
  padding-top: 15px;
  }
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
