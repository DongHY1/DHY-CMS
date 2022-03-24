<template>
    <div class="login-main">
        <h1 class="title">后台管理系统</h1>
        <el-tabs type="border-card" stretch="true">
            <el-tab-pane>
                <login-account ref="loginAccountRef"></login-account>
            </el-tab-pane>
        </el-tabs>
        <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button class="login-button" type="primary" @click="handleLoginIn">立即登录</el-button>
    </div>
</template>

<script setup>
import LoginAccount from "./login-account.vue";
import {ref} from 'vue'
const isKeepPassword = ref(true)
const loginAccountRef = ref(null)
function handleLoginIn(){
     loginAccountRef.value?.loginAction(isKeepPassword.value)
}

</script>

<style lang="less" scoped>
.login-main {
    width: 320px;
    .title {
        text-align: center;
    }
    .account-control{
        display: flex;
        justify-content:space-between;
    }
    .login-button{
        width: 100%;
    }
}
</style>