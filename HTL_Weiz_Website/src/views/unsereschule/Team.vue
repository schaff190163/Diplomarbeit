<template>
  <div>
    <!-- Navigation bar component -->
    <NavBar></NavBar>
    <HeaderBanner></HeaderBanner>

    <!-- Loader component displayed while data is being loaded -->
    <div v-if="loading" class="loader-container uk-position-center padleftright uk-width-extend">
      <Loader></Loader>
    </div>

    <!-- Search bar -->
    <div class="uk-margin padleftright">
      <form class="uk-search uk-search-medium" @submit.prevent="searchPersonnel">
        <span uk-search-icon></span>
        <input v-model="searchTerm" class="uk-search-input" type="search" placeholder="Suche" aria-label="Suche">
      </form>
    </div>

    <!-- Leitungsteam section -->
    <h1 v-if="filteredLeitungsteam().length > 0" class="padleftright padbot" id="abteilungsvorstaende">Leitungsteam</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredLeitungsteam()" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Lehrpersonal section -->
    <h1 v-if="filteredDept('teacher').length > 0" class="padleftright padbot" id="lehrpersonal">Lehrpersonal</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredDept('teacher')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- SchülerInnenvertretung section -->
    <h1 v-if="filteredTags('SchülerInnenvertretung').length > 0" class="padleftright padbot" id="schülerinnenvertretung">SchülerInnenvertretung</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('SchülerInnenvertretung')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Mädchenbeauftragte section -->
    <h1 v-if="filteredTags('Mädchenbeauftragte').length > 0" class="padleftright padbot" id="mädchenbeauftragte">Mädchenbeauftragte</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Mädchenbeauftragte')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- VertrauenslehrerInnen section -->
    <h1 v-if="filteredTags('Vertrauenslehrer').length > 0" class="padleftright padbot" id="vertrauenslehrerinnen">VertrauenslehrerInnen</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Vertrauenslehrer')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Bildungsberatung section -->
    <h1 v-if="filteredTags('Bildungsberater').length > 0" class="padleftright padbot" id="bildungsberatung">Bildungsberatung</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Bildungsberater')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Schularzt section -->
    <h1 v-if="filteredTags('Schularzt').length > 0" class="padleftright padbot" id="schularzt">Schularzt</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Schularzt')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Schulpsychologe section -->
    <h1 v-if="filteredTags('Schulpsychologe').length > 0" class="padleftright padbot" id="schulpsychologe">Schulpsychologe</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Schulpsychologe')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Sekretariat section -->
    <h1 v-if="filteredTags('Sekretariat').length > 0" class="padleftright padbot" id="sekretariat">Sekretariat</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Sekretariat')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Verwaltung section -->
    <h1 v-if="filteredTags('Verwaltung').length > 0" class="padleftright padbot" id="verwaltung">Verwaltung</h1>
    <div class="grid-containerstaff padleftright">
      <div v-for="member in filteredTags('Verwaltung')" :key="member.id">
        <Card_Staff v-if="member" :personnel="member"></Card_Staff>
      </div>
    </div>

    <!-- Footer component -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Staff from "../../components/Card_Staff.vue"; 
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import HeaderBanner from '../../components/HeaderBanner.vue';
import { ref } from 'vue';
import { WPApiHandler } from 'wpapihandler';
import type { Personnel } from 'wpapihandler';

export default {
  name: 'TeamView',
  components: {
    NavBar,
    Card_Staff,
    Footer,
    HeaderBanner,
    Loader
  },
  setup() {
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
        console.log('Fetched personnel:', personnel.value);
      } catch (error) {
        console.error('Error fetching personnel:', error);
      } finally {
        loading.value = false;
      }
    }

    function searchPersonnel(): void {
      updatePersonnel(searchTerm.value);
    }

    function filteredLeitungsteam(): Personnel[] {
      const tags = ['Abteilungsvorstand', 'Direktion', 'Werkstättenleitung'];

      return personnel.value
        .filter((member: Personnel) =>
          tags.some(tag => member.tags.includes(tag))
        )
        .sort((a, b) => {
          // Prioritize members with the 'Schulleitung' tag
          const aIsSchulleitung = a.tags.includes('Schulleitung') ? 1 : 0;
          const bIsSchulleitung = b.tags.includes('Schulleitung') ? 1 : 0;
          
          return bIsSchulleitung - aIsSchulleitung;
        });
    }

    function filteredTags(tags: string | string[]): Personnel[] {
      const tagList = Array.isArray(tags) ? tags : [tags];

      return personnel.value
        .filter((member: Personnel) =>
          tagList.some(tag => member.tags.includes(tag))
        )
        .filter(member => !filteredLeitungsteam().includes(member)); // Exclude Leitungsteam members
    }

    function filteredDept(department: string): Personnel[] {
      return personnel.value.filter((member: Personnel) =>
        member.department.toLowerCase() === department.toLowerCase() &&
        !member.tags.includes('Direktion') &&
        !member.tags.includes('Werkstättenleitung') &&
        !member.tags.includes('Abteilungsvorstand')
      );
    }

    // Initial load
    updatePersonnel();

    return {
      loading,
      searchTerm,
      searchPersonnel,
      filteredLeitungsteam,
      filteredTags,
      filteredDept,
    };
  }
};
</script>

<style>
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
    padding-left: 0;
    text-align: center;
  }
}
</style>
