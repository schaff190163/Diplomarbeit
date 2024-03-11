<template>
  <div class="uk-background-muted">
    <NavBar></NavBar>
    <h1 class="padtop padbot padleftright">Partner</h1>
    <div v-if="loading" class="loader-container uk-position-center"><Loader></Loader></div>
    <div v-for="item in partner" :key="item.id">
      <Card_Partner v-if="item" :partner="item"></Card_Partner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Partner from "../../components/Card_Partner.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";

export default {
  name: "News",
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

const partner = ref<Partner[]>([]);
const loading = ref<boolean>(false);

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

function update_partners(){
  loading.value = true;

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

update_partners();
</script>

<style></style>