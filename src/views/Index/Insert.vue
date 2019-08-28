<template>
    <div class="insert">
        <h3><b-badge variant="success">导入Excel</b-badge></h3>
        <hr>
        <b-row>
            <b-col md="6">
                <b-form>
                    <label for="excel">Excel的路径: </label>
                    <b-form-file v-model="file" :state="Boolean(file)" id="excel" aria-describedby="excel-help-block">

                    </b-form-file>
                    <b-form-text id="excel-help-block">
                        请选择Excel文件
                    </b-form-text>
                    <hr>
                    <b-button variant="primary" @click="insert">批量插入</b-button>
                    <b-button variant="danger" class="marginB">重置</b-button>
                    <b-button variant="outline-primary" class="marginB">发送邮件</b-button>
                </b-form>
            </b-col>
            <b-col md="5">
                <b-card header="导入结果统计" class="panel" border-variant="secondary" header-border-variant="secondary">
                    <pre>{{ result }}</pre>
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
                result: '暂无'
            }
        },
        methods: {
            insert: function () {
                let formData = new FormData();
                formData.append("excel", this.file); //加入文件对象
                console.log(formData)
                this.$http({
                    method:'post',
                    data: {
                        headers: { "Content-Type": "multipart/form-data" },
                        formData1: formData
                    },
                    url: process.env.VUE_APP_BASE_API + '/services/MachineSever/input'
                }).then((response) =>{
                    console.log(response)
                }).catch((error) =>{
                    console.log(error);
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
