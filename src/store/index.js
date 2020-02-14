import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/modules'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export const store = new Vuex.Store({
  modules: {
    ...modules
  }
})

if (window.Cypress) {
  // Only available during E2E tests
  window.__store__ = store
}
