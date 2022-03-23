import { createApp } from 'vue'
import App from './App.vue'
import axiosRequest from './service'
axiosRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors:{
    requestInterceptor:(config)=>{
      console.log("单独请求成功的拦截器")
      return config
    },
    requestInterceptorCatch:(err)=>{
      console.log("单独请求失败的拦截器")
      return err
    },
  }
})
createApp(App).mount('#app')
