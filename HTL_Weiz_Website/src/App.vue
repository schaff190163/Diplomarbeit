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
  padding-top: 25px;
}
.padbot {
  padding-bottom: 25px;
}
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}
.roundedl {
  border-radius: 18px;
}

@media (max-width: 640px) {
.padtop {
  padding-top: 10px;
}
.padbot {
  padding-bottom: 10px;
}
.padleftright {
  padding-left: 35px;
  padding-right: 35px;
}
}

@media (min-width: 1500px) {
.padleftright {
  padding-left: calc(20% - 150px);
  padding-right: calc(20% - 150px);
}
}
</style>
