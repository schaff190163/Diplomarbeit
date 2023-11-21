<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';

UIkit.use(Icons);

export default defineComponent({
  name: 'App',
});
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

.padtop {
  padding-top: 25px;
}
.padbot {
  padding-bottom: 25px;
}
.padleftright {
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
  padding-right: 35px;
}
}

@media (min-width: 1500px) {
.padtop {
  padding-top: 110px;
}
.padbot {
  padding-bottom: 110px;
}
.padleftright {
  padding-left: calc(20% - 150px);
  padding-right: calc(20% - 150px);
}
}
</style>
