<template>
  <div id="app">
    <add/>
  </div>
</template>

<script>
  import add from '../components/add.vue'
  
  export default {
    name: 'Add',
    components: {
      add
    }
  }
</script>

<style>
  @font-face {
    font-family: butler;
    src: local("butler/Butler_Stencil/Butler_Regular_Stencil")
  }
</style>