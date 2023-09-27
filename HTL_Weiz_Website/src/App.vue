<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css'; // Import the UIkit CSS file

UIkit.use(Icons);

export default defineComponent({
  name: 'App',
});
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

.padtopbot {
  padding-bottom: 50px;
  padding-top: 50px;
}
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}
@media (max-width: 640px) {
  .padtopbot {
  padding-bottom: 15px;
  padding-top: 15px;
  }
  .padleftright {
    padding-left: 35px;
    padding-right: 35px;
  }
}
</style>
