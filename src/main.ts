import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import { router } from './router/router'
import directives from './directives'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp))
Object.entries(directives).forEach(([name, d]) => app.directive(name, d))

app.use(router).use(pinia).mount('#app')
