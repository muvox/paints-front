import * as types from '@/store/mutation-types'
import api from '@/services/api/paints'
import { handleError } from '@/utils/utils.js'

const getters = {
  allPaints: state => state.allPaints
}

const actions = {
  getAllPaints({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getAllPaints()
        .then(response => {
          if (response.status === 200) {
            const paints = []
            const array = response.data
            console.log(array)
            array.forEach(element => {
              paints.push(element.name, element._id)
            })
            commit(types.FILL_ALL_PAINTS, paints)
            resolve()
          }
        })
        .catch(error => {
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
