<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    
    <NavBarSpace class="navbarspace"></NavBarSpace>
    <h1 class="teamheading">Direktion</h1>
    <DirektionCard class="space"></DirektionCard>
    <h1 class="teamheading">Abteilungsvorstände</h1>
    <div class="grid-containerav">
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
      <AvCard class="space"></AvCard>
    </div>
    <h1 class="teamheading">Lehrpersonal</h1>
    <div class="grid-containerstaff">
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
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
  position: relative;
}
.grid-containerstaff {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-top: 50px;
  position: relative;
}
</style>
