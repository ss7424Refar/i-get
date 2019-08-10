<template>
  <div id="headBar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="../../../public/assets/cat.jpeg" class="d-inline-block align-top" alt="Kitten">
        I-get
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav right>
          <b-nav-item>Hello! &nbsp;{{getUser}} </b-nav-item>
          <b-nav-form>
            <b-button @click="signOut" variant="dark" size="sm">注销 </b-button>
          </b-nav-form>
        </b-nav>
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
    },
    methods: {
      signOut: function () {
        localStorage.clear() // 清除所有数据
        this.$router.push({ path: '/'})
      }
    }
  }
</script>

<style scoped>
  #headBar {
    margin-bottom: 10px;
  }
</style>
