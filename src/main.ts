import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import { router } from './router/router'
import directives from './directives'

const app = createApp(App)

Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp))
Object.entries(directives).forEach(([name, d]) => app.directive(name, d))

app.use(router).mount('#app')
