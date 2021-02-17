import { mapActions } from 'vuex'
import LyHeader from './ly-header'
import LyPlayer from './ly-player'
import LyAllContent from './ly-all-content'
import LyListComments from './ly-list-comments'

export default {
  components: {
    'ly-header': LyHeader,
    'ly-all-content': LyAllContent,
    'ly-player': LyPlayer,
    'ly-list-comments': LyListComments
  },
  mounted () {
    this.initial()
  },
  methods: {
    ...mapActions({
      setMe: 'me/setMe'
    }),
    async initial () {
      try {
        const me = await this.$ServiceRepository.AuthService.me()
        await this.setMe(me)
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
}
