<template>
  <div id="app">
    <Head></Head>
    <b-container-fluid>
      <b-row>
        <b-col md="1">
          <side-bar></side-bar>
        </b-col>
        <b-col md="11">
          <transition name="fade">
            <router-view/>
          </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
