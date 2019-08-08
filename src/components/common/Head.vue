<template>
  <div id="headBar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="../../../public/assets/cat.jpeg" class="d-inline-block align-top" alt="Kitten">
        I-get
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">Hello! &nbsp;{{getUser}} </template>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    computed: {
      getUser: function () {
          return localStorage.getItem('user')
      }
    }
  }
</script>

<style scoped>
  #headBar {
    margin-bottom: 10px;
  }
</style>
