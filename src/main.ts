import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import { router } from './router/router'

const app = createApp(App)

Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp))

app.use(router).mount('#app')
