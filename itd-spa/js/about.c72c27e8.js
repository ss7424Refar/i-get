(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"22de":function(t,l,a){"use strict";var o=a("25be"),s=a.n(o);s.a},"25be":function(t,l,a){},cd56:function(t,l,a){"use strict";a.r(l);var o=function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{attrs:{id:"main"}},[a("h3",[a("b-badge",{attrs:{variant:"dark"}},[t._v("查询条件")])],1),a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"资产编号:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.fixed,callback:function(l){t.$set(t.form,"fixed",l)},expression:"form.fixed"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"资产名称:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.names,callback:function(l){t.$set(t.form,"names",l)},expression:"form.names"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"资产序列号:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.serial,callback:function(l){t.$set(t.form,"serial",l)},expression:"form.serial"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"型号:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.type,callback:function(l){t.$set(t.form,"type",l)},expression:"form.type"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"使用者:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.user,callback:function(l){t.$set(t.form,"user",l)},expression:"form.user"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"位置:"}},[a("b-input-group",[a("b-form-input",{model:{value:t.form.location,callback:function(l){t.$set(t.form,"location",l)},expression:"form.location"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"状态:"}},[a("b-input-group",[a("b-form-select",{attrs:{options:t.statusOptions},model:{value:t.form.status,callback:function(l){t.$set(t.form,"status",l)},expression:"form.status"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"部门:"}},[a("b-input-group",[a("b-form-select",{attrs:{options:t.departOptions},model:{value:t.form.depart,callback:function(l){t.$set(t.form,"depart",l)},expression:"form.depart"}})],1)],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"课:"}},[a("b-input-group",[a("b-form-select",{attrs:{options:t.sectionOptions},model:{value:t.form.section,callback:function(l){t.$set(t.form,"section",l)},expression:"form.section"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{"offset-md":"4"}},[a("b-button",{attrs:{variant:"info",type:"submit"}},[t._v("查询")])],1),a("b-col",{attrs:{md:"7"}},[a("b-button",{attrs:{variant:"primary",type:"reset"}},[t._v("重置")])],1)],1)],1),a("hr"),a("div",{attrs:{id:"toolbar"}},[a("h3",[a("b-badge",{attrs:{variant:"dark"}},[t._v("查询结果")]),a("b-button",{staticClass:"toolButton",attrs:{variant:"outline-primary"},on:{click:t.outPut}},[t._v("导出")])],1)]),a("b-modal",{attrs:{size:"xl",title:"具体信息","ok-only":""},model:{value:t.modalShow,callback:function(l){t.modalShow=l},expression:"modalShow"}},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"资产编号:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.fixed_no))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"资产名称:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.MODEL_NAME))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"序列号:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.SERIAL_NO))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"型号:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.type))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"流水号:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.serial_number))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"发票号:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.invoice_no))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"购买日期:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.purchase_date))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"发票日期:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.invoice_date))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"保修日期:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.warranty_date))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"实际价格:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.actual_price))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"含税价格:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.tax_inclusive_price))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"位置:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.location))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"状态:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.model_status))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"使用者:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.user_name))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"备注:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.remark))])])],1)],1),a("hr"),a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"CPU:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.CPU))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"硬盘:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.HDD))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"内存:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.MEMORY))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mac地址:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.mac_address))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"光驱:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.cd_rom))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"屏幕尺寸:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.screen_size))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"部门:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.department))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"课:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.section_manager))])])],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{"label-cols-sm":"3",label:"供应商:"}},[a("p",{staticClass:"detail"},[t._v(t._s(t.modalInfo.supplier))])])],1)],1)],1),a("BootstrapTable",{ref:"table",attrs:{columns:t.columns,options:t.options},on:{onClickRow:t.onClickRow}})],1)},s=[];console.log("http://172.30.52.43/ats");var e={data(){return{form:{fixed:null,names:null,serial:null,type:null,user:null,location:null,status:null,depart:null,section:null},modalShow:!1,modalInfo:{},statusOptions:[{value:null,text:"请选择"},{value:"0",text:"在库"},{value:"1",text:"待借出审批"},{value:"2",text:"审核通过"},{value:"3",text:"使用中"},{value:"4",text:"待报废审批"},{value:"5",text:"报废"},{value:"6",text:"待删除审批"}],departOptions:[{value:null,text:"请选择"},{value:"29",text:"DT部"},{value:"33",text:"VT部"},{value:"37",text:"SWT部"}],sectionOptions:[{value:null,text:"请选择"},{value:"1884",text:"SCD"},{value:"2271",text:"SWV"},{value:"2272",text:"PSD"},{value:"2273",text:"CUD"},{value:"2274",text:"FWD"},{value:"442",text:"SYD"},{value:"462",text:"HWD"},{value:"485",text:"MED"},{value:"491",text:"CSV"},{value:"499",text:"HWV"},{value:"520",text:"PAV"},{value:"540",text:"SSD"}],columns:[{field:"fixed_no",title:"资产编号"},{field:"MODEL_NAME",title:"资产名称"},{field:"CPU",title:"CPU"},{field:"model_status",title:"状态"},{field:"user_name",title:"样机使用者"},{field:"department",title:"部门"},{field:"section_manager",title:"课"},{field:"start_date",title:"开始使用时间"},{field:"predict_date",title:"预计归还时间"}],options:{classes:"table table-bordered table-hover table-striped table-sm",url:"http://172.30.52.43/ats/services/MachineSever/getMachineList",sidePagination:"server",pagination:"true",pageNumber:1,pageSize:20,pageList:[10,25,50],queryParams:function(t){return t},locale:"zh-CN",toolbar:"#toolbar"}}},methods:{onSubmit:function(t){t.preventDefault();let l=JSON.stringify(this.form);this.options.queryParams=function(t){return t.formData=l,t}},onReset:function(t){this.form.fixed=null,this.form.names=null,this.form.serial=null,this.form.type=null,this.form.user=null,this.form.location=null,this.form.status=null,this.form.depart=null,this.form.section=null},onClickRow:function(t,l){this.modalInfo=t,this.modalShow=!this.modalShow},outPut:function(){let t=JSON.stringify(this.form);window.location.href="http://172.30.52.43/ats/services/MachineSever/outputExcel?formData="+t,this.$bvToast.toast("请耐心等待导出结果!",{title:"提示",variant:"primary",solid:!0})}}},r=e,i=(a("22de"),a("2877")),m=Object(i["a"])(r,o,s,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=about.c72c27e8.js.map