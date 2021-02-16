const resource = `/content`

export const ContentService = ($axios) => ({
  index () {
    return $axios.$post(`${resource}`)
  },
  updateProgress (id, payload) {
    return $axios.$post(`${resource}/${id}/progress`, payload)
  },
  showComments (id) {
    return $axios.$post(`${resource}/${id}/comments`)
  }
})
