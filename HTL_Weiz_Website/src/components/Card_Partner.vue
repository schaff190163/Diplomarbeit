<template>
    <div>
      <div class="uk-inline roundedl">
        <img :src="partner.logo" class="roundedl" width="" height="" :alt="partner.name">
        <div class="uk-overlay uk-position-bottom uk-light">
          <h3 class="uk-card-title" v-html="decodeEntities(partner.name)"></h3>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Card_Partner',
    props: {
      partner: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      decodeEntities(html: string): string {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.documentElement.textContent || '';
      },
      limitContent(content: string): string {
        const words = content.split(' ');
        if (words.length > 20) {
          return words.slice(0, 20).join(' ') + '...';
        }
        return content;
      },
    },
  };
  </script>
  
  <style scoped>
    .gradient {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(34, 30, 30));
    }
  </style>
  