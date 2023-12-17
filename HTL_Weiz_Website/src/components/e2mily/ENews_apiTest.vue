<template>
  <h1>Test</h1>
  <h1 v-html="post_title"></h1>
  <div v-html="post_content"></div>
</template>

<script lang="ts">
import { WPApiHandler } from 'wpapihandler';

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "d3BhcGloYW5kbGVyOkd5NmQgWFFDdSBIWERHIG5KWnQgT3MwVyBGRUNB"
};

export default {
  data() {
    return {
      post_title: '',
      post_content: '',
    };
  },
  async mounted() {
    const wpa = new WPApiHandler(url, headers);
    try {
      const connection = await wpa.get_posts('1550');
      this.post_title = connection.data.title.rendered;
      this.post_content = connection.data.content.rendered;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};

</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.post-content {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

.post-content p {
  margin-bottom: 10px;
}

.post-content a {
  color: #007bff;
  text-decoration: none;
}

.post-content a:hover {
  text-decoration: underline;
}

.post-content img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

/* Add CSS to adjust list style */
.post-content ul {
  list-style-position: inside;
}
</style>