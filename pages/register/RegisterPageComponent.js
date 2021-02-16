export default {
  name: 'RegisterPageComponent',
  mounted () {
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  }
}
