<template>
  <div>
    <NavBar></NavBar>
    <h1 class="padleftright">News an der HTL Weiz</h1>
    <div class="padleftright padtop padbot grid-containersv">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post"></PostCard>
      </div>
    </div>
    <FooterMerge></FooterMerge>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import PostCard from "../../components/PostCard.vue";
import Footer from "../../components/Footer.vue";


export default {
  name: "News",
  components: {
    NavBar,
    PostCard,
import { WPApiHandler } from 'wpapihandler';

export default {
  name: 'News',
  components: {
    Footer,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const wpa = new WPApiHandler('https://dev.htlweiz.at/wordpress', {
      Authorization: 'Basic dnVlX2pzOnJYaFcgbGg2cSB3dXV2IGQzQzUgSUtyWCBZTWtJ',
    });

    try {
      const response = await wpa.get_posts();
      if (response.status === 200) {
        this.posts = response.data;
      } else {
        console.error('Error fetching posts:', response.error);
      }
    } catch (error) {
      console.error('Error in NewsView created:', error);
    }
  },
};

console.log('Init WPApiHandler');
const wp = new WPApiHandler(url, headers);

wp.get_posts()
  .then((response: Post[]) => {
    posts.value = response;
  })
  .catch((error: Error) => {
    console.error('Error:', error);
  });
</script>

<style>
.grid-containersv {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  position: relative;
}
</style>
