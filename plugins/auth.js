export default function ({ $auth, $route }) {
  $auth.onRedirect((to, from) => {
    return from
  })
  $auth.onError((error, name, endpoint) => {
    return error
  })
}
