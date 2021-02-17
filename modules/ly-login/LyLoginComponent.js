import { mapActions } from 'vuex'
export default {
  name: 'LyLogin',
  data () {
    return {
      loading: false,
      postData: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    this.destroyMe()
  },
  methods: {
    ...mapActions({
      destroyMe: 'me/destroyMe'
    }),
    login () {
      this.loading = true
      this.$auth.loginWith('login', {
        data: this.postData
      }).then(() => {
        this.loading = false
      }).catch((err) => {
        this.loading = false
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: err,
          text: 'Los datos ingresados son incorrectos',
          showConfirmButton: false,
          timer: 1800
        }).then(() => {
          setTimeout(() => {
            this.$nextTick(() => {
              this.$refs.form.reset()
            })
          }, 6000)
        })
      })
    }
  }
}
