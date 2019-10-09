import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)

export const createRouter = () => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    // scrollBehavior: (to, from, position) => {
    //   return position || { x: 0, y: 0 }
    // }
  })
  return router
}
