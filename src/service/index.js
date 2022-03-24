import AxiosRequest from './request'
import localCache from '@/utils/cache.js'
let axiosRequest = new AxiosRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
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
