# SERVICES

This directory is a repository of services that are registered in `src/services/index.js` and can be used in different Nuxt.js contexts, for example:

**In a component and/or Vuex:**
```
const {...} = this.$ServiceRepository
...
```

**In asyncData:** 
```
asyncData ({ $ServiceRepository }){
  const {...} = $ServiceRepository
  ... 
}

```
