import axios from 'axios'

export default {
  changeMyPassword(payload) {
    return axios.post('/users/changePassword', payload)
  },
  getProfile() {
    return axios.get('/users')
  },
  saveProfile(payload) {
    return axios.patch('/users', payload)
  }
}
