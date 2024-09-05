<template>
  <!-- Main container with background -->
  <div class="uk-background-muted">

    <!-- Navigation bar component -->
    <NavBar></NavBar>

    <!-- Title for the Partner section -->
    <h1 class="padtop padleftright">Partner der HTL Weiz</h1>

    <!-- Loader component displayed while data is being loaded -->
    <div v-if="loading" class="loader-container uk-position-center"><Loader></Loader></div>

    <!-- Container for partner cards with padding -->
    <div class="padbot padleftright partnergrid">
      <!-- Loop through partner data and display partner cards -->
      <div v-for="item in partner" :key="item.id">
        <Card_Partner v-if="item" :partner="item"></Card_Partner>
      </div>
    </div>

    <!-- Footer component -->
    <Footer></Footer>

  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Partner from "../../components/Card_Partner.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";

export default {
  // Component name
  name: "News",
  // Imported components
  components: {
    NavBar,
    Card_Partner,
    Footer,
    Loader,
  }
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { WPApiHandler, type Partner } from 'wpapihandler';

// Define reactive variables
const partner = ref<Partner[]>([]);
const loading = ref<boolean>(false);

// WordPress API URL and headers
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

// Initialize WPApiHandler
console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

// Function to update partner data
function update_partners(){
  loading.value = true;

  // Fetch partner data from WordPress API
  wp.get_partners('htlweiz')
    .then((response: Partner[]) => {
      partner.value = response;
    })
    .catch((error: Error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      loading.value = false;
    });
}

// Call update_partners function to fetch data on component mount
update_partners();
</script>

<style>
.partnergrid {
  /* Styling for grid layout */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: calc(10vw - 40px);
  justify-content: center;
  align-content: center;
}
</style>
