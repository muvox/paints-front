import Vue from 'vue'
import '@/plugins/axios'
import '@/plugins/vuetify'
import '@/plugins/veevalidate'
import '@/plugins/common'
import '@/plugins/googleAnalytics'
import '@/plugins/lodash'
import i18n from '@/plugins/i18n'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
  created() {
    store.dispatch('setLocale', store.getters.locale)
    console.log(store.state.auth.token)
    if (typeof store.state.auth.token === 'boolean') {
      store.dispatch('userLogout')
    } else if (typeof store.state.auth.token === 'string') {
      store.dispatch('autoLogin')
    }
  }
}).$mount('#app')

if (window.Cypress) {
  // Only available during E2E tests
  window.app = app
}
