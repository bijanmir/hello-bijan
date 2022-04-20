import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BasePage from './components/ui/BasePage.vue'
import BaseModule from './components/ui/BaseModule.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('base-page', BasePage)
app.component('base-module', BaseModule)

app.mount('#app')
