import {createApp} from 'vue'
import App from './App.vue'
import testleem from '../lib/main'

createApp(App)
  .use(testleem, {
    customStyle: {
      background: 'defaultBackground'
    }
  })
  .mount('#app')
