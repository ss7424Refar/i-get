<template>
  <div id="main">
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    <BootstrapTable :columns="columns" :options="options"></BootstrapTable>
  </div>
</template>

<script>
  export default {
    // created() {
    //   this.$http({
    //     method:'post',
    //     url:'http://localhost/ats-rebuild/services/MachineSever/test'
    //   }).then((response) =>{
    //     //这里使用了ES6的语法
    //     console.log(response.data);
    //     this.data = response.data;
    //     //请求成功返回的数据
    //   }).catch((error) =>{
    //     //请求失败返回的数据
    //     console.log(error);
    //   })
    // },
    data () {
      return {
        columns: [
          {
            field: 'fixed_no',
            title: '资产编号'
          },
          {
            field: 'MODEL_NAME',
            title: '资产名称'
          }, {
            field: 'model_status',
            title: '状态'
          }, {
            field: 'user_name',
            title: '样机使用者'
          }, {
            field: 'department',
            title: '部门'
          }, {
            field: 'section_manager',
            title: '课'
          }, {
            field: 'start_date',
            title: '开始使用时间'
          }, {
            field: 'predict_date',
            title: '预计归还时间'
          }
        ],
        options: {
          search: true,
          showColumns: true,
          classes: 'table table-bordered table-hover table-dark table-striped table-sm',
          url: 'http://localhost/ats-rebuild/services/MachineSever/getMachineList',
          sidePagination: 'server',
          pagination: 'true',
          pageNumber:1,
          pageSize: 20,
          pageList: [10, 25, 50]
        }
      }
    }
  }
</script>
