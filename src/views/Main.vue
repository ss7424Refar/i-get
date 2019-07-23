<template>
  <div id="main">
    <h3><b-badge variant="dark">查询条件</b-badge></h3>
    <b-row>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="资产编号:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label-cols-sm="2" label="资产名称:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="资产序列号:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="型号:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label-cols-sm="2" label="使用者:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="位置:">
          <b-input-group>
            <b-form-input v-model="filter"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="状态:">
          <b-input-group>
            <b-form-select v-model="statusSelected" :options="form.statusOptions"></b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label-cols-sm="2" label="部门:">
          <b-input-group>
            <b-form-select v-model="departSelected" :options="form.departOptions"></b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label-cols-sm="2" label="课:">
          <b-input-group>
            <b-form-select v-model="sectionSelected" :options="form.sectionOptions"></b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-md="4">
        <b-button variant="info">查询</b-button>
      </b-col>
      <b-col md="7">
        <b-button variant="primary">重置</b-button>
      </b-col>
    </b-row>

    <hr>

    <h3><b-badge variant="dark">查询结果</b-badge></h3>
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
        statusSelected: null,
        departSelected: null,
        sectionSelected: null,
        form: {
          statusOptions: [
            { value: null, text: '请选择' },
            { value: '0', text: '在库' },
            { value: '1', text: '待借出审批' },
            { value: '2', text: '审核通过' },
            { value: '3', text: '使用中' },
            { value: '4', text: '待报废审批' },
            { value: '5', text: '报废' },
            { value: '6', text: '待删除审批' },
          ],
          departOptions: [
            { value: null, text: '请选择' },
            { value: '1884', text: 'SCD' },
            { value: '2271', text: 'SWV' },
            { value: '2272', text: 'PSD' },
            { value: '2273', text: 'CUD' },
            { value: '2274', text: 'FWD' },
            { value: '442', text: 'SYD' },
            { value: '462', text: 'HWD' },
            { value: '485', text: 'MED' },
            { value: '491', text: 'CSV' },
            { value: '499', text: 'HWV' },
            { value: '520', text: 'PAV' },
            { value: '540', text: 'SSD' },
          ],
          sectionOptions: [
            { value: null, text: '请选择' },
            { value: '29', text: 'DT部' },
            { value: '33', text: 'VT部' },
            { value: '37', text: 'SWT部' },
          ]
        },
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
          // search: true,
          // showColumns: true,
          classes: 'table table-bordered table-hover table-striped table-sm',
          url: 'http://192.168.31.200/ats-rebuild/services/MachineSever/getMachineList',
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
