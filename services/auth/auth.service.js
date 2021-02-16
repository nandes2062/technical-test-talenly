const resource = '/auth'

export const AuthService = $axios => ({
  register (payload) {
    return $axios.$post(`${resource}/register`, payload)
  },
  me () {
    return $axios.$post(`${resource}/me`)
  }
})
