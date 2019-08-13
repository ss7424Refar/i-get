<template>
  <div id="app">
    <b-container fluid>
      <router-view/>
      <!--<HelloWorld msg="Welcome to Bootstrap Table App"/>-->
    </b-container>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>
