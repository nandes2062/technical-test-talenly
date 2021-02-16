export const state = {
  currentContent: {}
}

export const getters = {}

export const mutations = {
  SET_CURRENT_CONTENT (state, currentContent) {
    state.currentContent = currentContent
  }
}

export const actions = {
  /**
   * @param commit
   * @param dispatch
   * @param currentContent
   */
  setCurrentContent: ({ commit, dispatch }, currentContent) => {
    commit('SET_CURRENT_CONTENT', currentContent)
  }
}
