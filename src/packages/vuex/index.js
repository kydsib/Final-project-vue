import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store(store)
