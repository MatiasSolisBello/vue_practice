// Css personalizado
import './assets/main.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
