<template>
    <div class="login">
        <b-row>
            <b-col md="5"></b-col>
            <b-col md="2">
                <b-alert show variant="primary">请输入样机管理系统的账号和密码</b-alert>
                <b-form>
                    <b-form-group label-cols="4" label-cols-lg="2" label="账号" label-for="input-default">
                        <b-form-input id="input-default"></b-form-input>
                    </b-form-group>

                    <b-form-group label-cols="4" label-cols-lg="2" label="密码" label-for="input-default">
                        <b-form-input id="input-default"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary" @click="login">登录</b-button>
                    <b-button type="reset" variant="danger" class="reset">重置</b-button>
                </b-form>
            </b-col>
            <b-col md="5"></b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            login: function () {
                localStorage.setItem('userInfo', 'hello');
                this.$router.push({ name: 'home'})
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
