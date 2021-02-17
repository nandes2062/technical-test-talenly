import { mapActions } from 'vuex'
export default {
  name: 'LyLogin',
  data () {
    return {
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
      this.$auth.loginWith('login', {
        data: this.postData
      }).catch((err) => {
        this.$refs.form.setErrors({
          email: ['Compruebe si su email está escrito correctamente'],
          password: ['Compruebe si su password está escrito correctamente']
        })
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            this.$nextTick(() => {
              this.$refs.form.reset()
            })
          }, 5000)
        })
      })
    }
  }
}
