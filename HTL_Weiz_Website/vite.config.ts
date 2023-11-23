import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      'i': '/src/assets/images/',
      '@': '/src/',
    },
  },
  build: {
    rollupOptions: {
      external: [
        'src/assets/images/laype.svg',
        '../../images/backgrounds/divider-icon.svg',
        '../../images/backgrounds/list-bullet.svg',
        '../../images/backgrounds/form-select.svg',
        '../../images/backgrounds/form-datalist.svg',
        '../../images/backgrounds/form-radio.svg',
        '../../images/backgrounds/form-checkbox.svg',
        '../../images/backgrounds/form-checkbox-indeterminate.svg',
        'uikit',
        'uikit/dist/js/uikit-icons',
        'src/assets/images/bbb_logo.svg',
      ],
    },
  },
});