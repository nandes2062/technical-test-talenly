import { mapState } from 'vuex'
export default {
  name: 'LyPlayerComponent',
  computed: {
    ...mapState({
      currentContent: state => state.currentContent.currentContent
    })
  },
  methods: {}
}
