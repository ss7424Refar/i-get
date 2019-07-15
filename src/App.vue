<template>
  <div id="app">
    <Head></Head>
    <b-container-fluid>
      <b-row>
        <b-col md="1">
          <side-bar></side-bar>
        </b-col>
        <b-col md="11">
          <router-view/>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
  import Head from '@/components/common/Head'
  import SideBar from '@/components/common/SideBar'

  export default {
    name: 'App',
    components: {
      Head,
      SideBar
    }
  }
</script>

<style>
</style>
