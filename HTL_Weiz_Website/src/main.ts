import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

import './uikit/css/uikit.css';
import './uikit/js/uikit.js';
import './uikit/js/uikit-icons.js';

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head); 
app.mount('#app');
