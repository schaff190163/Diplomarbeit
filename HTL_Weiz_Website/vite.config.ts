import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      'i': 'src/assets/images/',
      '@': 'src/',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, 'src/styles/uikit-theme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  }
});
