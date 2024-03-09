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
import { WPApiHandler } from 'wpapihandler';

export default {
  name: 'News',
  components: {
    NavBar,
    PostCard,
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
const wp = new WPApiHandler('url', 'headers');

wp.get_posts()
  .then((response) => {
    this.posts = response;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
