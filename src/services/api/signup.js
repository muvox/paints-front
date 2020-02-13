import axios from 'axios'

export default {
  userSignUp(payload) {
    return axios.post('/users', payload)
  }
}
