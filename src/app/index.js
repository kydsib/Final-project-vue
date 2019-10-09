import Vue from 'vue'
import App from './App'
import { createRouter } from '@/packages/vue-router'
import { createStore } from '@/packages/vuex'

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
