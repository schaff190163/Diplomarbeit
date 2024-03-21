<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="teamheading" id="direktion">Direktion</h1>
    <Card_Direktion class="padleftright padtop padbot"></Card_Direktion>
    <div v-if="loading" class="loader-container uk-position-center"><Loader></Loader></div>
    <h1 class="teamheading" id="abteilungsvorstaende">Abteilungsvorstände</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in personnel" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>
    <h1 class="teamheading" id="lehrpersonal">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in personnel" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>
    <h1 class="teamheading" id="verwaltung">Verwaltung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in personnel" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>
    <h1 class="teamheading" id="schülerinnenvertretung">SchülerInnenvertretung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in personnel" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Direktion from "../../components/Card_Direktion.vue";
import Card_Staff from "../../components/Card_Staff.vue"; 
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";

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

<script setup lang="ts">
import { ref } from 'vue';
import { WPApiHandler, type Personnel } from 'wpapihandler';

const personnel = ref<Personnel[]>([]);
const loading = ref<boolean>(false);

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

function update_personnel(){
  loading.value = true;

  wp.get_personnel()
    .then((response: Personnel[]) => {
      personnel.value = response;
    })
    .catch((error: Error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      loading.value = false;
    });
}

update_personnel();
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
  font-size: 2rem;
  padding-left:0px;
  text-align: center;
  }
}
</style>