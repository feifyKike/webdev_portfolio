import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // configuring fontawesome icons
app.component('font-awesome-icon', FontAwesomeIcon) // creating fontawesome component

app.mount('#app')
