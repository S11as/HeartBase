import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'

import 'reset-css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import store from "@/store/store";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
