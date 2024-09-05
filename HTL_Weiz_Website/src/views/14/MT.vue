<template>
  <div>
    <!-- Navigation bar -->
    <NavBar></NavBar>
    <div class="hero-container">
      <img src="/images/HTL_Page/wide/hero_mt.png" alt="Hero Image" class="zweig-img">
    </div>
    <div class="padleftright">
      <!-- Title for the educational offer section -->
      <h1>Maschinenbau - Mechatronik</h1>

      <!-- Quick Facts Section -->
      <Quickfacts_Abteilungen 
        typ="HTL Tagesschule"
        dauer="5 Jahre"
        abschluss="Reife- und Diplomprüfung"
        vorraussetzungen="positiver Abschluss der 8. Schulstufe"
        standort="Weiz"
      />

      <!-- Sections for the posts with respective headings -->
      <div>
        
        <!-- MT-Schwerpunkte Section -->
        <section v-if="mtSchwerpunkte">
          <h2>Schwerpunkte</h2>
          <p v-html="mtSchwerpunkte.content"></p>
        </section>

        <!-- MT-Eigenschaften Section -->
        <section v-if="mtEigenschaften">
          <h2>Eigenschaften</h2>
          <p v-html="mtEigenschaften.content"></p>
        </section>

        <!-- MT-Karriereaussichten Section -->
        <section v-if="mtKarriereaussichten">
          <h2>Karriereaussichten</h2>
          <p v-html="mtKarriereaussichten.content"></p>
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
const mtSchwerpunkte = ref<Post | null>(null);
const mtEigenschaften = ref<Post | null>(null);
const mtKarriereaussichten = ref<Post | null>(null);
const loading = ref<boolean>(false);

// WordPress API setup
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json", 
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};
const wp = new WPApiHandler(url, headers);

// Function to fetch a post by tag
async function fetchPostByTag(tag: string, target: typeof mtSchwerpunkte) {
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
    fetchPostByTag('MT-schwerpunkte', mtSchwerpunkte),
    fetchPostByTag('MT-eigenschaften', mtEigenschaften),
    fetchPostByTag('MT-karierreaussichten', mtKarriereaussichten)
  ]);
  loading.value = false;
}

// Initial fetch of posts
fetchAllPosts();

// Set the page metadata
useHead({
  title: 'Bildungsangebot der HTL Weiz - Maschinenbau - Mechatronik',
  meta: [
    { name: 'description', content: 'Erfahren Sie mehr über die Bildungsangebote der HTL Weiz im Bereich Maschinenbau - Mechatronik, inklusive Schwerpunkte, Eigenschaften und Karriereaussichten.' }
  ]
});
</script>
