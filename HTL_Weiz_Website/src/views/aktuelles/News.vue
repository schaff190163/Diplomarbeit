<template>
  <div>
    <NavBar></NavBar>
    <h1 class="padleftright">News an der HTL Weiz</h1>
    <div class="padleftright padtop padbot grid-containersv">
      <div v-for="post in posts" :key="post.id">
        <Card_Post v-if="post" :post="post"></Card_Post>
      </div>
      <div v-if="loading=true" class="loader-container uk-position-center"><Loader></Loader></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Card_Post from "../../components/Card_Post.vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";

export default {
  name: "News",
  components: {
    NavBar,
    Card_Post,
    Footer,
    Loader,
  }
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { WPApiHandler, type Post } from 'wpapihandler';

const posts = ref<Post[]>([]);
const loading = ref<boolean>(false);

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

function update_posts(){
  loading.value = true;
  wp.get_posts()
    .then((response: Post[]) => {
      posts.value = response;
    })
    .catch((error: Error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      loading.value = false;
    });
}
update_posts();
</script>

<style>
.grid-containersv {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  position: relative;
}
.loader-container {
  text-align: center;
  margin-top: 50px;
}
@media screen and (max-width: 1320px) {
  .grid-containersv {
    gap: 15px;
  }
}
@media screen and (max-width: 1320px) {
  .grid-containersv {
    gap: 15px;
  }
}
</style>../../components/Card_Post.vue
