<template>
  <div>
    <button class="uk-button uk-width-expand uk-button-default roundedl" @click="downloadFile">{{ buttonLabel }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DownloadFileButton',
  props: {
    pdfUrl: {
      type: String,
      required: true
    },
    pdfFileName: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    downloadFile() {
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.target = '_blank';
      link.download = this.pdfFileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>
