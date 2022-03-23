import AxiosRequest from './request'
let axiosRequest = new AxiosRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptor: (config) => {
     console.log("请求成功拦截0")
      return config
    },
    requestInterceptorCatch: (err) => {
     console.log("请求失败拦截0")
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default axiosRequest
