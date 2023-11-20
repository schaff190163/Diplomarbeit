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

.padtopbot {
  padding-bottom: 25px;
  padding-top: 25px;
}
.padleftright {
  padding-left: 100px;
  padding-right: 100px;
}

.padtopbotsmall {
  padding-bottom: 12.5px;
  padding-top: 12.5px;
}

.darkbg {
  background-color: #E8E8E8;
}
.roundedl {
  border-radius: 18px;
}

@media (max-width: 640px) {
  .padtopbot {
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .padleftright {
    padding-left: 35px;
    padding-right: 35px;
  }
  .padtopbotsmall {
    padding-bottom: 5px;
    padding-top: 5px;
}
}

@media (min-width: 1500px) {
  .padtopbot {
    padding-bottom: 110px;
    padding-top: 110px;
  }
  .padtopbotsmall {
    padding-bottom: 55px;
    padding-top: 55px;
  .padleftright {
    padding-left: calc(20% - 150px);
    padding-right: calc(20% - 150px);
  }
  }
}
</style>
