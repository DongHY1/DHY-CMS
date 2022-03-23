import axios from 'axios'
// 全局拦截，实例拦截，每个请求拦截
class AxiosRequest {
  instance;
  interceptors;
  constructor(config) {
    this.instance = axios.create(config) 
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptorCatch,
    )
    // 添加实例拦截器
    this.instance.interceptors.request.use(
    (config)=>{
        console.log("请求成功拦截1")
        return config
    },(err)=>{
        console.log("请求失败拦截1")
        return err
    }
    )
    this.instance.interceptors.response.use(
    (config)=>{
        
        return config
    },(err)=>{return err}
    )
  }
    // 请求拦截
  request(config) {
    if(config.interceptors?.requestInterceptor){
        config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if(config.interceptors?.responseInterceptor){
          res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
export default AxiosRequest
