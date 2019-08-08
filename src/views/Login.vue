<template>
    <div class="login">
        <b-row>
            <b-col md="5"></b-col>
            <b-col md="2">
                <b-alert show variant="primary">请输入样机管理系统的账号和密码</b-alert>
                <b-form @submit.prevent>
                    <b-form-group label-cols="4" label-cols-lg="2" label="账号" label-for="feedback-user">
                        <b-form-input id="feedback-user" v-model="loginInfo.user" placeholder="请输入账号"></b-form-input>
                        <b-form-invalid-feedback :state="validationUser">
                            账号不存在
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="密码" label-for="feedback-password">
                        <b-form-input id="feedback-password" v-model="loginInfo.password" type="password" placeholder="请输入密码"></b-form-input>
                        <b-form-invalid-feedback :state="validationPassword">
                            密码错误
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-button type="submit" variant="primary" @click="login">登录</b-button>
                    <b-button type="reset" variant="danger" class="reset" @click="reset">重置</b-button>
                </b-form>
            </b-col>
            <b-col md="5"></b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginInfo: {
                    user: null,
                    password:null
                },
                validationUser: null, // validation: false为false才显示
                validationPassword: null
            }
        },
        methods: {
            login: function () {
                  this.$http({
                    method:'post',
                    data: this.loginInfo,
                    url: process.env.VUE_APP_BASE_API + '/services/MachineSever/loginCheck'
                  }).then((response) =>{
                    //这里使用了ES6的语法
                      console.log(response.data.data)

                    this.reset()
                    if ('101' === response.data.code) {
                        this.validationUser = false
                    } else if ('201' === response.data.code) {
                        this.validationPassword = false
                    } else if ('301' === response.data.code) {
                        localStorage.setItem('user', response.data.data);
                        this.$router.push({ name: 'home'})
                    }
                  }).catch((error) =>{
                    //请求失败返回的数据
                    console.log(error);
                  })
            },
            reset: function () {
                this.validationUser = null
                this.validationPassword = null
            }
        }
    }
</script>

<style scoped>
    .login {
        margin-top: 100px;
    }
    .reset {
        margin-left: 30px;
    }
</style>
