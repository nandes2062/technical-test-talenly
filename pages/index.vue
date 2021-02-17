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
