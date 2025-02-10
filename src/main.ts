import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import testleem from '../lib/main'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

createApp(App)
  .use(testleem, {
    customStyle: {
      background: 'defaultBackground'
    }
  })
  .use(router)
  .mount('#app')
