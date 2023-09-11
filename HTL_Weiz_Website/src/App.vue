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

.navbarspace {
  padding-top: 50px;
}
</style>
