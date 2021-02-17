import { mapState, mapGetters, mapActions } from 'vuex'
import RadialProgressBar from '@/components/RadialProgressBar'
export default {
  name: 'LyAllContentComponent',
  components: {
    RadialProgressBar
  },
  data () {
    return {
      loading: true,
      allContent: null,
      completedSteps: 4,
      totalSteps: 10
    }
  },
  watch: {
    currentContent: {
      handler (newVal) {
        if (newVal) {
          this.allContent = this.allContent.map((v, k) => {
            if (v.id === newVal.id) {
              return newVal
            } else {
              return v
            }
          })
        }
      },
      inmediate: true
    }
  },
  mounted () {
    this.indexContent()
  },
  computed: {
    ...mapState({
      currentContent: state => state.currentContent.currentContent
    }),
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
