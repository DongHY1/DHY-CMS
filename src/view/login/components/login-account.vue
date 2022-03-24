<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" type="password" show-password />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import localCache from '../../../utils/cache'
import useLogin from '../../../store/login/login'
const formRef = ref(null)
const account = reactive({
    name: localCache.getCache('name'),
    password: localCache.getCache('password')
})
const rules = {
    name: [
        {
            required: true,
            message: '用户名未输入',
            trigger: 'blur'
        },
        {
            pattern: /^\S{5,10}$/,
            message: '用户名由5-10个数字或字母组成',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码未输入',
            trigger: 'blur'
        },
        {
            pattern: /^\S{6,}$/,
            message: '密码由6个以上数字或字母组成',
            trigger: 'blur'
        }
    ]
}
const loginAction = (isKeepPassword) => {
    formRef.value?.validate((valid) => {
        if (valid) {
            // 缓存处理
            if (isKeepPassword) {
                
                localCache.setCache('name', account.name)
                localCache.setCache('password', account.password)
            } else {
                localCache.deleteCache('name')
                localCache.deleteCache('password')
            }
            // 登录验证
            const login = useLogin()
            login.accountLoginAction({"name":account.name,"password":account.password})
        }
    })
}
defineExpose({
    loginAction
})
</script>

<style lang="less" scoped>
</style>