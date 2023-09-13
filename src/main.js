import { BootstrapVueNext } from 'bootstrap-vue-next'
import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import '@/assets/style.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')


