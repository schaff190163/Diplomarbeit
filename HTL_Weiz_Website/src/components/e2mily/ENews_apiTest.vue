<template>
  <div class="container">
    <img v-for="pt in partners" :key="pt.id" :src="pt.logo" width="200" height="200" alt="">
    <p>{{ partners[1] }}</p>
  </div>
</template>

<script>
import { WPApiHandler } from 'wpapihandler';

// Define headers before using them
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

// Define URL after headers
const url = 'https://dev.htlweiz.at/wordpress';

// Create an instance of WPApiHandler with URL and headers
const wpa = new WPApiHandler(url, headers);
const partners = await wpa.get_partners('emily');



export default {
  data () {
    return {
      partners,
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Add CSS to adjust list style */
.post-content ul {
  list-style-position: inside;
}
</style>
