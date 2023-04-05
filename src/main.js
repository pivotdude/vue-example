import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import derectives from '@/directives/index'
import router from '@/router/router'
import state from '@/store/index'

const app = createApp(App)

derectives.forEach(directive => {
    app.directive(directive.name, directive)
});

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).use(state).mount('#app')
