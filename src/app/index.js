import Vue from 'vue'
import App from './App'
import { createRouter } from '@/packages/vue-router'
import { createStore } from '@/packages/vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export function createApp () {
  const store = createStore()
  const router = createRouter()
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })
  return { store, router, app }
}
