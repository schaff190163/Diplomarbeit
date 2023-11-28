<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
  },
});
</script>

<style>
.padtop {
  padding-top: 25px !important;
}

.padbot {
  padding-bottom: 25px !important;
}

.padleftright {
  padding-left: 100px !important;
  padding-right: 100px !important;
}

.roundedl {
  border-radius: 18px !important;
}

@media (max-width: 640px) {
  .padtop {
    padding-top: 10px !important;
  }

  .padbot {
    padding-bottom: 10px !important;
  }

  .padleftright {
    padding-left: 35px !important;
    padding-right: 35px !important;
  }
}

@media (min-width: 1500px) {
  .padleftright {
    padding-left: calc(20% - 150px) !important;
    padding-right: calc(20% - 150px) !important;
  }
}
</style>
