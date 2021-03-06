export default {
  name: 'LyRegisterComponent',
  data () {
    return {
      loading: false,
      postData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      this.loading = true
      try {
        const { success, errors } = await this.$ServiceRepository.AuthService.register(this.postData)
        if (success) {
          this.login()
        }
        if (!success && errors.email[0] === 'The email has already been taken.') {
          this.$refs.form.setErrors({
            email: ['El email ya ha sido registrado']
          })
          this.$swal({
            position: 'top-end',
            icon: 'error',
            title: 'El email ya ha sido registrado',
            showConfirmButton: false,
            timer: 1500
          })
          this.loading = false
        }
      } catch (err) {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500
        })
        this.loading = false
      }
    },
    login () {
      this.$auth.loginWith('login', {
        data: {
          email: this.postData.email,
          password: this.postData.password
        }
      }).then(() => {
        this.loading = false
        this.$router.push('/')
      }).catch((err) => {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 1500
        })
        this.loading = false
      })
    }
  }
}
