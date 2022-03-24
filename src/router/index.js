import { createRouter,createWebHashHistory } from "vue-router";
import localCache from '@/utils/cache.js'
const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:()=>import('@/view/login/login.vue')
    },
    {
        path:'/main',
        component:()=>import('@/view/main/main.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach((to)=>{
    if(to.path!=='/login'){
        const token = localCache.getCache('token')
        if(!token){
            return '/login'
        }
    }
})
export default router