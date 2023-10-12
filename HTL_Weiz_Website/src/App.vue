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
.darkbg {
<<<<<<< HEAD
  background-color: #E8E8E8;
=======
  background-color: #EEEEEE;
>>>>>>> 1587bd6066a1cb61487bd5a3a6bba51c5bee93a3
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
