<template>
<div class="app-loader">
    <div class="preloader-wrapper active">
    <div class="spinner-layer" :class="color">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    color () {
      // eslint-disable-next-line no-unused-vars
      const colors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only']
      return colors[Math.floar(Math.random() * 3)]
    }
  }
}
</script>
