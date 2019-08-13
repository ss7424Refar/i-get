<template>
  <div id="main">
    <h3><b-badge variant="dark">查询条件</b-badge></h3>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="资产编号:">
            <b-input-group>
              <b-form-input v-model="form.fixed"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label-cols-sm="2" label="资产名称:">
            <b-input-group>
              <b-form-input v-model="form.names"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="资产序列号:">
            <b-input-group>
              <b-form-input v-model="form.serial"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="型号:">
            <b-input-group>
              <b-form-input v-model="form.type"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label-cols-sm="2" label="使用者:">
            <b-input-group>
              <b-form-input v-model="form.user"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="位置:">
            <b-input-group>
              <b-form-input v-model="form.location"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="状态:">
            <b-input-group>
              <b-form-select v-model="form.status" :options="statusOptions"></b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label-cols-sm="2" label="部门:">
            <b-input-group>
              <b-form-select v-model="form.depart" :options="departOptions"></b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="2" label="课:">
            <b-input-group>
              <b-form-select v-model="form.section" :options="sectionOptions"></b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col offset-md="4">
          <b-button variant="info" type="submit">查询</b-button>
        </b-col>
        <b-col md="7">
          <b-button variant="primary" type="reset">重置</b-button>
        </b-col>
      </b-row>
    </b-form>

    <hr>

    <div id="toolbar">
      <h3>
        <b-badge variant="dark">查询结果</b-badge>
        <b-button-group>
            <b-button variant="outline-primary" class="toolButton" @click="apply">申请</b-button>
            <b-button variant="outline-primary" @click="outPut">导出</b-button>
            <b-button variant="outline-primary" @click="refresh">刷新</b-button>
        </b-button-group>
      </h3>
    </div>

    <b-modal v-model="modalShow" size="xl" title="具体信息" ok-only>
      <b-row>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="资产编号:">
            <p class="detail">{{modalInfo.fixed_no}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="资产名称:">
            <p class="detail">{{modalInfo.MODEL_NAME}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="序列号:">
            <p class="detail">{{modalInfo.SERIAL_NO}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="型号:">
            <p class="detail">{{modalInfo.type}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="流水号:">
            <p class="detail">{{modalInfo.serial_number}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="发票号:">
            <p class="detail">{{modalInfo.invoice_no}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="购买日期:">
            <p class="detail">{{modalInfo.purchase_date}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="发票日期:">
            <p class="detail">{{modalInfo.invoice_date}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="保修日期:">
            <p class="detail">{{modalInfo.warranty_date}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="实际价格:">
            <p class="detail">{{modalInfo.actual_price}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="含税价格:">
            <p class="detail">{{modalInfo.tax_inclusive_price}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="位置:">
            <p class="detail">{{modalInfo.location}}</p>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label-cols-sm="3" label="状态:">
            <p class="detail">{{modalInfo.model_status}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="使用者:">
            <p class="detail">{{modalInfo.user_name}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="备注:">
            <p class="detail">{{modalInfo.remark}}</p>
          </b-form-group>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="CPU:">
            <p class="detail">{{modalInfo.CPU}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="硬盘:">
            <p class="detail">{{modalInfo.HDD}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="内存:">
            <p class="detail">{{modalInfo.MEMORY}}</p>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label-cols-sm="3" label="Mac地址:">
            <p class="detail">{{modalInfo.mac_address}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="光驱:">
            <p class="detail">{{modalInfo.cd_rom}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="屏幕尺寸:">
            <p class="detail">{{modalInfo.screen_size}}</p>
          </b-form-group>
        </b-col>

        <b-col md="4">
            <b-form-group label-cols-sm="3" label="部门:">
            <p class="detail">{{modalInfo.department}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="课:">
            <p class="detail">{{modalInfo.section_manager}}</p>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label-cols-sm="3" label="供应商:">
            <p class="detail">{{modalInfo.supplier}}</p>
          </b-form-group>
        </b-col>
      </b-row>

    </b-modal>

    <BootstrapTable ref="table" :columns="columns" :options="options" @onPostBody="vueFormatterPostBody" @onDblClickRow="onDblClickRow"></BootstrapTable>
  </div>
</template>

<script>
  // console.log(process.env.VUE_APP_BASE_API)

  import tableMixin from '@/mixins/table'
  export default {
    mixins: [tableMixin],
    data () {
      return {
        form: {
          fixed: null,
          names: null,
          serial: null,
          type: null,
          user: null,
          location: null,
          status: null,
          depart: null,
          section: null
        },
        modalShow: false,
        modalInfo: {
        },
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
          { value: '29', text: 'DT部' },
          { value: '33', text: 'VT部' },
          { value: '37', text: 'SWT部' }
        ],
        sectionOptions: [
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
        columns: [
          {
            field: 'state',
            checkbox: true
          },
          {
            field: 'fixed_no',
            title: '资产编号'
          },
          {
            field: 'MODEL_NAME',
            title: '资产名称'
          },
          {
            field: 'CPU',
            title: 'CPU'
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
          }, {
            field: 'op',
            title: '操作',
            // formatter: function (value, row) {
            //   var flag = row['op'];
            //
            //   if ('apply' === flag) {
            //     return '<a href="javascript:" class="cancel">取消申请</a>'
            //   }else {
            //     return '<a href="#">-</a>'
            //   }
            // },
            // events: {
            //   'click .cancel': (e, value, row) => {
            //     this.cancel(row)
            //   }
            // }
            formatter: (value, row) => {

              var flag = row['op'];
              if ('apply' === flag) {
                return this.vueFormatter({
                  template: '<b-button variant="outline-primary" @click="cancel(row)">取消申请</b-button>',
                  data: { row },
                  methods: {
                    cancel: this.cancel
                  }
                })
              }else {
                return '<a href="#">-</a>'
              }

            }
          }
        ],
        options: {
          classes: 'table table-bordered table-hover table-striped table-sm',
          url: process.env.VUE_APP_BASE_API + '/services/MachineSever/getMachineList',
          sidePagination: 'server',
          pagination: 'true',
          pageNumber:1,
          pageSize: 20,
          pageList: [10, 25, 50],
          queryParams: function(params) {
            params.userId = localStorage.getItem('userId')
            return params
          },
          locale: 'zh-CN',
          toolbar: '#toolbar'
        }
      }
    },
    methods: {
      onSubmit: function (evt) {
        evt.preventDefault()

        let formData = JSON.stringify(this.form)
        this.options.queryParams = function (params) {
          params.userId = localStorage.getItem('userId')
          params.formData = formData
          return params
        }

      },
      onReset: function (evt) {
        this.form.fixed = null
        this.form.names = null
        this.form.serial = null
        this.form.type = null
        this.form.user = null
        this.form.location = null
        this.form.status = null
        this.form.depart = null
        this.form.section = null
      },
      onDblClickRow: function (row, $element) {
        this.modalInfo = row;
        this.modalShow = !this.modalShow
      },
      apply: function() {
          let selection = this.$refs.table.getSelections();

          if (0 == selection.length) {
              this.message('请选择至少一个项目')
          }

          let checkOn = false
          for (let i = 0; i < selection.length; i++) {
            let status = selection[i].model_status

              if ('在库' !== status) {
                  checkOn = true
                  break
              }

          }

          if (checkOn) {
              this.message('请选择【在库】机型进行申请')
              return false
          }

          this.$http({
              method:'post',
              data: {selection: JSON.stringify(selection), userId: localStorage.getItem('userId')},
              url: process.env.VUE_APP_BASE_API + '/services/MachineSever/apply'
          }).then((response) =>{
              response = response.data
              if ('done' === response) {
                  this.message('申请成功')
              } else {
                  this.message('申请失败')
              }
              this.$refs.table.refresh()
          }).catch((error) =>{
              this.message('申请失败')
              console.log(error);
              this.$refs.table.refresh()
          })
      },
      outPut: function () {
        let formData = JSON.stringify(this.form)
        window.location.href = process.env.VUE_APP_BASE_API + '/services/MachineSever/outputExcel?' + 'formData=' + formData
        this.message('请耐心等待导出结果!')

      },
       refresh:function () {
           this.$refs.table.refresh();
       },
      cancel: function (row) {
          this.$http({
              method:'post',
              data: {no: row['fixed_no'], userId: localStorage.getItem('userId')},
              url: process.env.VUE_APP_BASE_API + '/services/MachineSever/cancel'
          }).then((response) =>{
              response = response.data
              if ('done' === response) {
                  this.message('取消申请成功')
              } else {
                  this.message('取消申请失败')
              }
              this.$refs.table.refresh()
          }).catch((error) =>{
              this.message('取消申请失败')
              console.log(error);
              this.$refs.table.refresh()
          })
      },
      message: function (msg) {
          this.$bvToast.toast(msg, {
              title: `提示`,
              variant: 'primary',
              // autoHideDelay: 5000,
              solid: true
          })
      }
    }
  }
</script>

<style>
  .detail {
    margin-top: 7px;
  }
  .toolButton {
    margin-left: 15px;
  }
</style>
