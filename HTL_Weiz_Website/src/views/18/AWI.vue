<template>
  <div>
    <!-- Navigation bar -->
    <NavBar></NavBar>
    <div class="hero-container">
      <img src="/images/HTL_Page/wide/hero_wi.png" alt="Hero Image" class="zweig-img">
    </div>
    <div class="padleftright">
      <!-- Title for the educational offer section -->
      <h1>Abendschule - Wirtschaftsingeneure</h1>

      <!-- Quick Facts Section -->
      <Quickfacts_Abteilungen 
        typ="Abendschule oder Abendkolleg"
        dauer="Abendschule 8 Semester oder Abendkolleg 6 Semester"
        abschluss="Reife- und Diplomprüfung bzw. Diplomprüfung"
        vorraussetzungen="LAP, Fachschule, Werkmeister oder Matura"
        standort="Weiz"
      />

      <!-- Sections for the posts with respective headings -->
      <div>
        
        <!-- AWI-Schwerpunkte Section -->
        <section v-if="awiSchwerpunkte">
          <h2>Schwerpunkte</h2>
          <p v-html="awiSchwerpunkte.content"></p>
        </section>

        <!-- AWI-Eigenschaften Section -->
        <section v-if="awiEigenschaften">
          <h2>Eigenschaften</h2>
          <p v-html="awiEigenschaften.content"></p>
        </section>

        <!-- AWI-Karriereaussichten Section -->
        <section v-if="awiKarriereaussichten">
          <h2>Karriereaussichten</h2>
          <p v-html="awiKarriereaussichten.content"></p>
        </section>
      </div>

      <!-- Loader displayed while data is being fetched -->
      <div v-if="loading">
        <Loader></Loader>
      </div>
    </div>
    <!-- Footer component -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import NavBar from "../../components/NavBar.vue";
import Quickfacts_Abteilungen from "../../components/Quickfacts_Abteilungen.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import { WPApiHandler, type Post } from 'wpapihandler';

// State for storing individual posts and loading status
const awiSchwerpunkte = ref<Post | null>(null);
const awiEigenschaften = ref<Post | null>(null);
const awiKarriereaussichten = ref<Post | null>(null);
const loading = ref<boolean>(false);

// WordPress API setup
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json", 
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};
const wp = new WPApiHandler(url, headers);

// Function to fetch a post by tag
async function fetchPostByTag(tag: string, target: typeof awiSchwerpunkte) {
  try {
    const response = await wp.get_posts(undefined, [tag]);
    if (response.length > 0) {
      target.value = response[0];
    }
  } catch (error) {
    console.error(`Error fetching post with tag ${tag}:`, error);
  }
}

// Fetch all necessary posts
async function fetchAllPosts() {
  loading.value = true;
  await Promise.all([
    fetchPostByTag('AWI-schwerpunkte', awiSchwerpunkte),
    fetchPostByTag('AWI-eigenschaften', awiEigenschaften),
    fetchPostByTag('AWI-karierreaussichten', awiKarriereaussichten)
  ]);
  loading.value = false;
}

// Initial fetch of posts
fetchAllPosts();

// Set the page metadata
useHead({
  title: 'Bildungsangebot der HTL Weiz - Abendschule - Wirtschaftsingeneure',
  meta: [
    { name: 'description', content: 'Erfahren Sie mehr über die Bildungsangebote der HTL Weiz im Bereich Abendschule - Wirtschaftsingeneure, inklusive Schwerpunkte, Eigenschaften und Karriereaussichten.' }
  ]
});
</script>
