<template>
  <div id="siderBar">
    <b-list-group>
      <!--用href就跳转了。-->
      <b-list-group-item v-for="(list, index) in navLists" :key="index" :class="{active: activeIndex == index}" :to="list.link" @click="changeActive(index)" >{{list.text}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data: function () {
      return {
        navLists: [
          {
            "text" : "首页",
            "link" : "/"
          },
          {
            "text" : "主界面",
            "link" : "/main"
          }
        ],
        activeIndex : 0
      }
    },
    methods: {
      changeActive(index) {
        this.activeIndex = index;
      }

    }
  }
</script>

<style scoped>
  #siderBar {
    margin-left: 10px;
  }
</style>
