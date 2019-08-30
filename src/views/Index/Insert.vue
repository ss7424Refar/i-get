<template>
    <div class="insert">
        <h3><b-badge variant="success">导入Excel</b-badge></h3>
        <hr>
        <b-row>
            <b-col md="6">
                <b-form>
                    <label for="excel">Excel的路径: </label>
                    <b-form-file v-model="file" id="excel" aria-describedby="excel-help-block" accept=".xls, .xlsx">

                    </b-form-file>
                    <b-form-text id="excel-help-block">
                        请选择Excel文件
                    </b-form-text>
                    <hr>
                    <b-button variant="primary" @click="insert">批量插入</b-button>
                    <b-button variant="danger" class="marginB" @click="onReset">重置</b-button>
                    <b-button variant="outline-primary" class="marginB">发送邮件</b-button>
                </b-form>
            </b-col>
            <b-col md="5">
                <b-card header="导入结果统计" class="panel" border-variant="secondary" header-border-variant="secondary"
                        :title="msg">
                    <pre>{{ detail }}</pre>
                </b-card>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Insert",
        data () {
            return {
                file: null,
                detail: '暂无',
                msg: ''
            }
        },
        methods: {
            insert: function () {
                if (!this.file) {
                    this.message('请选择Excel文件')
                    return false
                }
                let formData = new FormData();
                formData.append("excel", this.file); //加入文件对象
                const config = {
                    headers: { "Content-Type": "multipart/form-data" }
                };
                this.$http.post(
                    process.env.VUE_APP_BASE_API + '/services/MachineSever/input',
                    formData,
                    config
                ).then(res => {
                    res = res.data
                    this.msg = res.msg
                    this.detail = res.detail

                }).catch((error) =>{
                    this.message('服务器内部错误(500)')
                    console.log(error);
                });
            },
            onReset: function () {
                this.file = null
                this.msg = ''
                this.detail = '暂无'
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

<style scoped>
    .marginB {
        margin-left: 10px;
    }
    .panel {
        margin-top: 20px;
    }
</style>
