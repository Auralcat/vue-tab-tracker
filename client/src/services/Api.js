// This is to make the API management easier
import axios from 'axios'
import store from '@/store/store'

export default() => {
  return axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
