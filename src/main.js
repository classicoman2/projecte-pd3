import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// JS
import 'bootstrap'


createApp(App).use(router).mount('#app')
