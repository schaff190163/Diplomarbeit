import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './uikit/css/uikit.css';       // Import the CSS file
import './uikit/js/uikit.js';         // Import the main UIkit JavaScript file
import './uikit/js/uikit-icons.js';   // Import the UIkit Icons JavaScript file

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
