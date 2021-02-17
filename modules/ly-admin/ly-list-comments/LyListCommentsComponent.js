import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'LyListCommentsComponent',
  data () {
    return {
      comments: null,
      amountComments: null,
      loading: true,
      loadingCreate: false,
      loadingEdit: false,
      postData: {
        content: '',
        user_id: null,
        content_id: 1
      }
    }
  },
  watch: {
    $currentContentId: {
      handler (newVal) {
        if (newVal) {
          this.showComments()
        }
      },
      inmediate: true
    }
  },
  computed: {
    ...mapGetters({
      $currentContentId: 'currentContent/currentContentId',
      $meId: 'me/meId'
    })
  },
  mounted () {
    moment.locale('es')
    if (this.$currentContentId) {
      this.showComments()
    }
  },
  methods: {
    async showComments () {
      try {
        const { comments } = await this.$ServiceRepository.ContentService.showComments(this.$currentContentId)
        this.comments = comments.map((v, k) => {
          return {
            ...v,
            ago: moment(v.updated_at).fromNow(),
            dropdown: false,
            edit: false,
            loading: false
          }
        }).reverse()
        this.amountComments = comments.length
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
    async createComment () {
      this.postData = {
        content: this.postData.content,
        user_id: this.$meId,
        content_id: this.$currentContentId
      }
      this.loadingCreate = true
      try {
        await this.$ServiceRepository.CommentService.create(this.postData)
        await this.showComments()
        this.loadingCreate = false
        this.postData.content = ''
      } catch (error) {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500
        })
        this.loadingCreate = false
      }
    },
    async updateComment ([$event], id) {
      this.loadingComment(id, true)
      try {
        await this.$ServiceRepository.CommentService.update(id, { content: $event.target.value })
        await this.showComments()
        this.editComment(id, false)
        this.loadingComment(id, false)
      } catch (error) {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500
        })
        this.editComment(id, false)
        this.loadingComment(id, false)
      }
    },
    deleteComment (id) {
      this.$swal({
        title: 'Eliminar comentario',
        text: '¿Eliminar tu comentario definitivamente?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$ServiceRepository.CommentService.delete(id)
            this.$swal(
              'Comentario eliminado',
              'Se eliminó correctamente',
              'success'
            )
            this.showComments()
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
      })
    },
    editComment (id, state) {
      this.comments = this.comments.map((v, k) => {
        if (id === v.id) {
          return { ...v, edit: state }
        } else { return v }
      })
    },
    loadingComment (id, state) {
      this.comments = this.comments.map((v, k) => {
        if (id === v.id) {
          return { ...v, loading: state }
        } else { return v }
      })
    },
    closeDropdown () {
      this.comments = this.comments.map((v, k) => {
        return { ...v, dropdown: false }
      })
    }
  }
}
