<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  computed: {
    layout () {
      console.log(this.$route.meta)
      return 'main-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import '~/index.css';
</style>
