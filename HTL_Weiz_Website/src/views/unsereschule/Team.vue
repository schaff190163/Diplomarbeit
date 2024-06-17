<template>
  <div>
    <!-- Navigation bar component -->
    <NavBar></NavBar>
    <HeaderBanner></HeaderBanner>
    <!-- Title for the Direktion section -->
    <h1 class="teamheading" id="direktion">Direktion</h1>

    <!-- Card for the Direktion -->
    <Card_Direktion class="padleftright padtop padbot"></Card_Direktion>

    <!-- Loader component displayed while data is being loaded -->
    <div v-if="loading" class="loader-container uk-position-center padleftright uk-width-extend"><Loader></Loader></div>

    <!-- Search bar -->
    <div class="uk-margin padlr">
      <form class="uk-search uk-search-large" @submit.prevent="searchPersonnel">
        <span uk-search-icon></span>
        <input v-model="searchTerm" class="uk-search-input" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>

    <!-- Leitungsteam section -->
    <h1 v-if="filteredAV('Abteilungsvorstand').length > 0" class="teamheading" id="abteilungsvorstaende">Leitungsteam</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in filteredAV('Abteilungsvorstand')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Lehrpersonal section -->
    <h1 v-if="filteredDept('teacher').length > 0" class="teamheading" id="lehrpersonal">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in filteredDept('teacher')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Verwaltung section -->
    <h1 v-if="filteredDept('verwaltung').length > 0" class="teamheading" id="verwaltung">Verwaltung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in filteredDept('verwaltung')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- SchülerInnenvertretung section -->
    <h1 v-if="filteredDept('schülerinnenvertretung').length > 0" class="teamheading" id="schülerinnenvertretung">SchülerInnenvertretung</h1>
    <div class="grid-containerstaff padleftright padtop padbot">
      <div v-for="member in filteredDept('schülerinnenvertretung')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Footer component -->
    <Footer></Footer>

  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Direktion from "../../components/Card_Direktion.vue";
import Card_Staff from "../../components/Card_Staff.vue"; 
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import HeaderBanner from '../../components/HeaderBanner.vue';

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
const searchTerm = ref<string>('');

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

const wp = new WPApiHandler(url, headers);

async function updatePersonnel(search?: string): Promise<void> {
  loading.value = true;

  try {
    personnel.value = await wp.get_personnel(search);
    console.log(personnel.value);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;
  }
}

function searchPersonnel(): void {
  updatePersonnel(searchTerm.value);
}

function filteredAV(tag: string): Personnel[] {
  return personnel.value.filter((member: Personnel) => member.tags.includes(tag));
}

function filteredDept(department: string): Personnel[] {
  return personnel.value.filter((member: Personnel) => member.department.includes(department.toLowerCase()));
}

updatePersonnel();
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
