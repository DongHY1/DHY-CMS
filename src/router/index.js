import { createRouter,createWebHashHistory } from "vue-router";
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
export default router