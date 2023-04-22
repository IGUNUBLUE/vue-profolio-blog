import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/style.css'
import config from '@config'
// import './assets/main.css'
const app = createApp(App)

app.use(router)
app.provide('config', config)

app.mount('#app')
