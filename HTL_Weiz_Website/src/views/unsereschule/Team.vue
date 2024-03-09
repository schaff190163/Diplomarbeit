<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="teamheading" id="team">Das Team der HTL Weiz</h1>
    <p class="padleftright">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <h1 class="teamheading" id="direktion">Direktion</h1>
    <Card_Direktion lass="padleftright padtop padbot"></Card_Direktion>
    <h1 class="teamheading" id="abteilungsvorstaende">Abteilungsvorstände</h1>
    <div class="grid-containerav padleftright padtop padbot">
      <Card_Abteilungsvorstand avname="Harald Macher" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Macher.jpg"></Card_Abteilungsvorstand>
      <Card_Abteilungsvorstand avname="Christian Deimel" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Deimel.jpg"></Card_Abteilungsvorstand>
      <Card_Abteilungsvorstand avname="Josef Hierz" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Hierz.jpg"></Card_Abteilungsvorstand>
      <Card_Abteilungsvorstand avname="Bernhard Pertl" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Pertl.jpg"></Card_Abteilungsvorstand>
      <Card_Abteilungsvorstand avname="Heimo T. Blattner" avsubtitle="Abteilungsvorstand " imgsrc="/images/team/Blattner.jpg"></Card_Abteilungsvorstand>
      <Card_Abteilungsvorstand avname="Wolfgang Höllerbauer" avsubtitle="Werkstättenleitung " imgsrc="/images/team/Hoellerbauer.jpg"></Card_Abteilungsvorstand>
    </div>
    <h1 class="teamheading" id="lehrpersonal">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
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
import Card_Abteilungsvorstand from "../../components/Card_Abteilungsvorstand.vue";
import Card_Staff from "../../components/Card_Staff.vue" 
import Footer from "../../components/Footer.vue";

export default {
  name: 'TeamView',
  components: {
    NavBar,
    Card_Direktion,
    Card_Abteilungsvorstand,
    Card_Staff,
    Footer,
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
