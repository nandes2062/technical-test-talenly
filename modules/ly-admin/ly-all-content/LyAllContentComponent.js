import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LyAllContentComponent',
  data () {
    return {
      loading: true,
      allContent: null
    }
  },
  mounted () {
    this.indexContent()
  },
  computed: {
    ...mapGetters({
      $currentContentId: 'currentContent/currentContentId'
    })
  },
  methods: {
    ...mapActions({
      setCurrentContent: 'currentContent/setCurrentContent'
    }),
    async indexContent () {
      try {
        const { content } = await this.$ServiceRepository.ContentService.index()
        this.allContent = content
        this.playingVideo(content[0])
        this.loading = false
      } catch (error) {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500
        })
        this.loading = false
      }
    },
    playingVideo (payload) {
      this.setCurrentContent(payload)
    }
  }
}
