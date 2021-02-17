export const state = () => ({
  me: {
    created_at: '',
    email: '',
    email_verified_at: null,
    id: null,
    name: '',
    updated_at: ''
  }
})

export const getters = {
  meId: (state) => {
    return state.me.id
  }
}

export const mutations = {
  SET_ME (state, me) {
    state.me = me
  },
  DESTROY_ME (state) {
    state.me = {
      created_at: '',
      email: '',
      email_verified_at: null,
      id: null,
      name: '',
      updated_at: ''
    }
  }
}

export const actions = {
  /**
   * @param commit
   * @param dispatch
   * @param me
   */
  setMe: ({ commit, dispatch }, me) => {
    commit('SET_ME', me)
  },
  destroyMe: ({ commit, dispatch }) => {
    commit('DESTROY_ME')
  }
}
