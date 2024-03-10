<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="teamheading" id="direktion">Direktion</h1>
    <Card_Direktion class="padleftright padtop padbot"></Card_Direktion>
    <h1 class="teamheading" id="abteilungsvorstaende">Abteilungsvorstände</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <Card_Staff name="Harald Macher" title="AV DI " short="MH" imgsrc="/images/team/Macher.jpg"></Card_Staff>
      <Card_Staff name="Christian Deimel" title="B.Ed." short="dei" imgsrc="/images/team/Deimel.jpg"></Card_Staff>
      <Card_Staff name="Josef Hierz" title="Ing. B.Ed." short="hie" imgsrc="/images/team/Hierz.jpg"></Card_Staff>
      <Card_Staff name="Bernhard Pertl" title="AV DI" short="PE" imgsrc="/images/team/Pertl.jpg"></Card_Staff>
      <Card_Staff name="Heimo T. Blattner" title="AV DI" short="BL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Wolfgang Höllerbauer" title="FOL OSR Dipl.-Päd." short="hoe" imgsrc="/images/team/Hoellerbauer.jpg"></Card_Staff>
    </div>
    <h1 class="teamheading" id="lehrpersonal">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
      <Card_Staff name="Robert Ulmer" title="DI" short="UL" imgsrc="/images/team/Blattner.jpg"></Card_Staff>
    </div>
    <h1 class="teamheading" id="verwaltung">Verwaltung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
    </div>
    <h1 class="teamheading" id="schülerinnenvertretung">SchülerInnenvertretung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Direktion from "../../components/Card_Direktion.vue";
import Card_Staff from "../../components/Card_Staff.vue" 
import Footer from "../../components/Footer.vue";

export default {
  name: 'TeamView',
  components: {
    NavBar,
    Card_Direktion,
    Card_Staff,
    Footer,
},
};
</script>

<style>
.teamheading {
  font-size: 40px;
  padding-left: 100px;
}
.grid-containerstaff {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
}
@media only screen and (max-width : 1200px) {
  .grid-containerstaff {
  grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width : 940px) {
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
