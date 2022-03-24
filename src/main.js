import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
// import axiosRequest from './service'
import 'normalize.css'
import './assets/css/base.less'
// axiosRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors:{
//     requestInterceptor:(config)=>{
//       console.log("单独请求成功的拦截器")
//       return config
//     },
//     requestInterceptorCatch:(err)=>{
//       console.log("单独请求失败的拦截器")
//       return err
//     },
//   }
// }).then((res)=>{
//   console.log(res.data)
// })
createApp(App).use(router).mount('#app')
