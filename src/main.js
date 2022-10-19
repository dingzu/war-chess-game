import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import state from '@/data/state.js'
import config from '@/data/config.js'

const app = createApp(App)
app.use(router)
app.config.globalProperties.STATE = state
app.config.globalProperties.CONFIG = config
app.mount('#app')




