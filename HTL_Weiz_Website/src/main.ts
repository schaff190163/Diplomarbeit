import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';
import './styles/uikit-theme.less';

UIkit.use(Icons);

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head);
app.mount('#app');
