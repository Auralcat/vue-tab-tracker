import Api from '@/services/Api'

export default {
  // Get all songs from the backend
  index () {
    return Api.get('songs')
  }
}
