<template>
  <div>
    <NavBar></NavBar>
    <HeaderBanner></HeaderBanner>
    <div class="padleftright">
      <!-- Display the post title -->
      <h1>{{ post?.title }}</h1>

      <!-- Display the post content -->
      <p v-html="post?.content"></p>

      <!-- Loader displayed while data is being fetched -->
      <div v-if="loading" class="loader-container uk-position-center">
        <Loader></Loader>
      </div>

      <!-- Download button for Elternverein PDF -->
      <DownloadPdfButton 
        button-label="Zuschuss Elternverein Download" 
        pdf-url="/files/20160217ElternvereinZuschuss.pdf" 
        pdf-file-name="Elternverein_Zuschuss.pdf">
      </DownloadPdfButton>

      <!-- Table with contact details -->
      <table class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>Funktion</th>
            <th>Name</th>
            <th>Email</th>
            <th class="tel-col">Telefon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Obmann</td>
            <td class="uk-text-light">Ing. Herwig Glössl</td>
            <td class="uk-text-light">ev.obmann@htlweiz.at</td>
            <td class="uk-text-light tel-col">+43 (664) 88286808</td>
          </tr>
          <tr>
            <td>Obmann Stellvertreter</td>
            <td class="uk-text-light">Stefan Tandl</td>
            <td class="uk-text-light">ev.obmann-stv@htlweiz.at</td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Kassier</td>
            <td class="uk-text-light">Christoph Wurzinger</td>
            <td class="uk-text-light">ev.kassier@htlweiz.at</td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Kassier Stellvertreter</td>
            <td class="uk-text-light">Markus Lederer</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Schriftführer</td>
            <td class="uk-text-light">Andrea Leiner</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
          <tr>
            <td>Schriftführer Stellvertreter</td>
            <td class="uk-text-light">Johanna Mandl</td>
            <td class="uk-text-light"></td>
            <td class="uk-text-light tel-col"></td>
          </tr>
        </tbody>
      </table>
    </div> 
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import DownloadPdfButton from "../../components/DownloadPdfButton.vue";
import HeaderBanner from '../../components/HeaderBanner.vue';
import Loader from "../../components/Loader.vue";
import { WPApiHandler, type Post } from 'wpapihandler';

// State for storing the post and loading status
const post = ref<Post | null>(null);
const loading = ref<boolean>(false);

// WordPress API setup
const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};
const wp = new WPApiHandler(url, headers);

// Fetch the post tagged with "elternverein"
function fetch_elternverein_post() {
  loading.value = true;
  wp.get_posts(undefined, ['elternverein'])
    .then((response: Post[]) => {
      if (response.length > 0) {
        post.value = response[0];

        // Set the page metadata
        useHead({
          title: post.value.title,
          meta: [
            { name: 'description', content: post.value.excerpt.replace(/<[^>]+>/g, '') || 'Elternverein der HTL Weiz' }
          ]
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
}

// Initial fetch of the "Elternverein" post
fetch_elternverein_post();
</script>

<style>
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}

@media (max-width: 640px) {
  .padleftright {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .tel-col {
    display: none;
  }
}

@media (max-width: 480px) {
  .uk-table td:nth-child(3) {
    display: none;
  }
}
</style>
