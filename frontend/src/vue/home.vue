<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
  import home from '../components/home.vue'
  
  export default {
    name: 'Home',
    components: {
      home
    }
  }
</script>

<style>
  @font-face {
    font-family: butler;
    src: local("butler/Butler_Stencil/Butler_Regular_Stencil")
  }
</style>