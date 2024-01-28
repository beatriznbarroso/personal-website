import './assets/main.css'

import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import router from './router'
import './index.css'


const app = createApp(App).use(Vue3Lottie)

app.use(router)

app.mount('#app')
