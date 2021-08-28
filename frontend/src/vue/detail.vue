<template>
  <div id="app">
    <detail/>
  </div>
</template>

<script>
  import detail from '../components/detail.vue'
  
  export default {
    name: 'Detail',
    components: {
      detail
    }
  }
</script>

<style>
  @font-face {
    font-family: butler;
    src: local("butler/Butler_Stencil/Butler_Regular_Stencil")
  }
</style>