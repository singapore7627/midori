import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createHead } from "@vueuse/head"

import "./assets/css/index.scss"

createApp(App).use(store).use(router).use(createHead()).mount('#app')
