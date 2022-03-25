<template>
    <div class="nav-header">
        <svg
            t="1648191030569"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1987"
            width="20"
            height="20"
            @click="handleClick"
        >
            <path
                d="M96 160h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z"
                p-id="1988"
            />
        </svg>
    </div>
</template>

<script setup>
import {ref,defineEmits} from 'vue'
const isFold = ref(false)
const handleClick = ()=>{
    isFold.value = !isFold.value
    emits('foldChange',isFold.value)
}
const emits = defineEmits(['foldChange'])
</script>

<style lang="less" scoped>
</style>