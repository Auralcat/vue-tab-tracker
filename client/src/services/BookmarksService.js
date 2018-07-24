import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post (params) {
    return Api().post('bookmarks', {
      params: params
    })
  },
  delete (bookmarkId) {
    return Api().get(`bookmarks/${bookmarkId}`)
  },
}
