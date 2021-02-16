// import { mapState, mapActions } from 'vuex'
export default {
  name: 'LyListCommentsComponent',
  data () {
    return {
      allContent: null,
      showDropdown: false
    }
  },
  mounted () {
    this.indexContent()
  },
  computed: {
    // ...mapState({
    //   allContent: state => state.allContent.allContent
    // })
  },
  methods: {
    async indexContent () {
      try {
        const { content } = await this.$ServiceRepository.ContentService.index()
        this.allContent = content
      } catch (error) {}
    },
    closeDropdown () {
      this.showDropdown = !this.showDropdown
    }
  }
}
