import Api from '@/services/Api'

export default {
  // Get all songs from the backend
  index () {
    return Api().get('songs')
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  }
}
