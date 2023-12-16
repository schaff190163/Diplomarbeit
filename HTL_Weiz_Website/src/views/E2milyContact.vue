<template>
  <div class="body">
    <ENavbar></ENavbar>
    <EContact></EContact>
    <EFooter></EFooter>
  </div>
</template>
  
  <script lang="ts">
  import ENavbar from "../components/e2mily/ENavbar_contact.vue";
  import EFooter from "../components/e2mily/EFooter.vue";
  import EContact from "../components/e2mily/EContact.vue"


  
  export default {
    name: 'EmptyComponent',
    components: {
      ENavbar,
      EFooter,
      EContact,
    },
  };
  </script>
  
  <style>
  /* Styles for this component */
  </style>
  