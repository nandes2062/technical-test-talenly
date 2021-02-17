export const state = () => ({
  currentContent: {
    article: '',
    content_type_id: null,
    created_at: '',
    description: '',
    id: null,
    progress: 0,
    title: '',
    updated_at: '',
    video_url: ''
  }
})

export const getters = {
  currentContentId: (state) => {
    return state.currentContent.id
  }
}

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
