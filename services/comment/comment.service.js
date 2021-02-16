const resource = `/comment`

export const CommentService = ($axios) => ({
  create (payload) {
    return $axios.$post(`${resource}/create`, payload)
  },
  update (id, payload) {
    return $axios.$post(`${resource}/${id}/update`, payload)
  },
  delete (id) {
    return $axios.$post(`${resource}/${id}`)
  }
})
