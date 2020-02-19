import axios from 'axios'

export default {
  getAllPaints() {
    return axios.get('/paints')
  }
}
