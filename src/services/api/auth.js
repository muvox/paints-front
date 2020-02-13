import axios from 'axios'

export default {
  userLogin(payload) {
    console.log(payload)
    return axios.post('/api/authenticate/login', payload)
  },
  refreshToken() {
    return axios.get('/token')
  }
}
