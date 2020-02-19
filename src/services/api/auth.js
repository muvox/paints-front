import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('/authenticate/login', payload)
  },
  refreshToken() {
    return axios.get('/token')
  }
}
