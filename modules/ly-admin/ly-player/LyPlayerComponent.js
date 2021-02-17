import { mapState, mapActions } from 'vuex'
export default {
  name: 'LyPlayerComponent',
  data () {
    return {
      postData: {
        progress: 0
      }
    }
  },
  computed: {
    ...mapState({
      currentContent: state => state.currentContent.currentContent
    })
  },
  watch: {
    currentContent: {
      handler (newVal) {
        if (newVal) {
          this.postData.progress = newVal.progress
        }
      },
      inmediate: true
    }
  },
  mounted () {
    this.playingVideo()
  },
  methods: {
    ...mapActions({
      setCurrentContent: 'currentContent/setCurrentContent'
    }),
    /**
     * Progress update simulation 1 min each video
     */
    playingVideo () {
      setInterval(async () => {
        if (this.$auth.loggedIn) {
          if (this.postData.progress < 10) {
            try {
              this.postData.progress++
              const { content } = await this.$ServiceRepository.ContentService.updateProgress(this.currentContent.id, this.postData)
              this.setCurrentContent(content)
            } catch (error) {
              this.$swal({
                position: 'top-end',
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }
      }, 10000)
    },
    pauseVideo () {}
  }
}
