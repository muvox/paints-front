import * as types from '@/store/mutation-types'
import api from '@/services/api/paints'
import { handleError } from '@/utils/utils.js'

const getters = {
  allPaints: state => state.allPaints
}

const actions = {
  getAllPaints({ commit }) {
    return new Promise((resolve, reject) => {
      commit(types.SHOW_LOADING, true)
      api
        .getAllPaints()
        .then(response => {
          if (response.status === 200) {
            commit(types.FILL_ALL_PAINTS, response.data)
            console.log(response)
            // commit(types.TOTAL_CITIES, response.data.totalDocs)
            commit(types.SHOW_LOADING, false)
            resolve()
          }
        })
        .catch(error => {
          console.log(error)
          handleError(error, commit, reject)
        })
    })
  }
}

const mutations = {
  [types.FILL_ALL_PAINTS](state, paints) {
    state.allPaints = paints
  }
}

const state = {
  allPaints: []
}

export default {
  state,
  getters,
  actions,
  mutations
}
