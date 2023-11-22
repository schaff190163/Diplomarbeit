<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import uk from 'uikit'
import 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';

export default defineComponent({
  name: 'App',
  mounted() {
    uk.use(Icons);
  },
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
