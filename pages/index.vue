<template>
  <div v-if="!this.$auth.loggedIn" class="login-container font-body">
    <ly-login />
  </div>
  <div v-else class="container mx-auto font-body">
    <ly-admin />
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  @apply bg-indigo-100;
}
.login-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
