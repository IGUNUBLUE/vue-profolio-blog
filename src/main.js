import { createApp } from 'vue'
import { inject } from '@vercel/analytics';
 
import App from '@/App.vue'
import router from '@/router'
import config from '@config'
import '@/style.css'

const app = createApp(App)

inject(); // Initialize analytics

app.use(router)
app.provide('config', config)

app.mount('#app')
