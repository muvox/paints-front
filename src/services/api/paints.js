import axios from 'axios'

export default {
  getAllPaints() {
    console.log('calling paints yo')
    return axios.get('/paints')
  }
}
