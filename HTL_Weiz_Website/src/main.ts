import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './uikit/css/uikit.css';
import './uikit/js/uikit.js'; 
import './uikit/js/uikit-icons.js';
import WPApiHandler from 'wpapihandler';


const app = createApp(App);

app.component('WPApiHandler', WPApiHandler);
app.use(createPinia());
app.use(router);

app.mount('#app');


const wpa = new WPApiHandler(
    'https://dev.htlweiz.at/wordpress', 
    { "Content-Type": "application/json",
      "Authorization": "Basic dnVlX2pzOnJYaFcgbGg2cSB3dXV2IGQzQzUgSUtyWCBZTWtJ" }
);