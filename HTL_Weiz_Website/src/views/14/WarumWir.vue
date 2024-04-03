<template>
  <NavBar/>
  <div>
    <h1>Warum Wir?</h1>
  </div>
  <Footer/>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Elternverein',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
/* Styles for this component */
</style>
