import { mapActions } from 'vuex'
export default {
  name: 'LyAllContentComponent',
  data () {
    return {
      allContent: null
    }
  },
  mounted () {
    this.indexContent()
  },
  methods: {
    ...mapActions({
      setCurrentContent: 'currentContent/setCurrentContent'
    }),
    async indexContent () {
      try {
        const { content } = await this.$ServiceRepository.ContentService.index()
        this.allContent = content
      } catch (error) {}
    },
    playingVideo (payload) {
      this.setCurrentContent(payload)
    }
  }
}
