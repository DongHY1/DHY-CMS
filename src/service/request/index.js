import axios from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
// import 'element-plus/lib/components/loading/src/loading'
// 全局拦截，实例拦截，每个请求拦截
class AxiosRequest {
  instance
  interceptors
  loading
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加实例拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求成功拦截1')
        this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(255, 255, 255, 0.5)'
        })
        return config
      },
      (err) => {
        console.log('请求失败拦截1')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 5000)
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }
  // 请求拦截
  request(config) {
    return new Promise((resolve,reject)=>{
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch((err)=>{
        reject(err)
      })
    })
  }
}
export default AxiosRequest
