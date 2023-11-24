<template>
    <div class="frame">
      <div v-for="index in 3" :key="index" class="ellipse"></div>
    </div>
  </template>
  
  <!-- MyComponent.vue -->

<style scoped>
:root {
  --variable-collection-gray-background: rgba(247, 247, 247, 1);
  --variable-collection-dark-gray: rgba(96, 96, 96, 1);
  --variable-collection-link: rgba(15, 129, 177, 1);
}

.frame {
  display: inline-flex;
  align-items: flex-start;
  gap: 28px;
  position: relative;
}

.ellipse {
  position: relative;
  width: 14px;
  height: 14px;
  background-color: var(--variable-collection-gray-background);
  border-radius: 7px;
}
</style>


  
  