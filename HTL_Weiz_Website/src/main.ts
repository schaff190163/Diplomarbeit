import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

import './uikit/css/uikit.css';
const UIkit = require('./uikit/js/uikit.js');
const Icons = require('./uikit/js/uikit-icons.js');

// use Icons
UIkit.use(Icons);

// Attach UIkit to window object
(window as any).UIkit = UIkit;

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head);
app.mount('#app');
