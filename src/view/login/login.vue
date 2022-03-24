<template>
    <div class="login">
        <login-main></login-main>
    </div>
        
</template>

<script setup>
 import loginMain from './components/login-main.vue'
</script>

<style lang="less" scoped>
    .login{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>