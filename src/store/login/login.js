import { defineStore } from 'pinia'
import {requestAccountLogin,requestUserInfoById,requestUserMenusByRoleId} from '@/service/login/login.js'
import localCache from '@/utils/cache.js'
import router from '@/router'
const useLogin = defineStore('login', {
  state:()=>{
      return{
          token:'',
          userInfo:{},
          userMenus:[]
      }
  },
  getters:{
  },
  actions:{
      async accountLoginAction(payload){
        // 实现登录逻辑
        let loginRes  = await requestAccountLogin(payload)
        const {id,token} = loginRes.data
        this.token = token
        localCache.setCache('token',token)
        console.log(token)

        // 请求用户信息
        const userInfoResult = await requestUserInfoById(id)
        console.log(userInfoResult)
        const userInfo = userInfoResult.data
        this.userInfo = userInfo
        localCache.setCache('userInfo',userInfo)
        
        //请求用户菜单
        const userMenusResult = await requestUserMenusByRoleId(id)
        const userMenus = userMenusResult.data
        console.log(userMenus)
        this.userMenus = userMenus
        localCache.setCache('userMeuns',userMenus)

        // 前往首页
        router.push('/main')
        
      }
  }
})
export default useLogin