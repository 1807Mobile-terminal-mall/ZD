import axios from 'axios'
import store from '@/store'
// import {getLocal} from '@/tool/localStorage.js'
/*
    当第一次请求 显示懒加载，剩下就不调用了
    当都完毕后隐藏懒加载
*/
class Ajax{
    constructor(){
        // 设置访问路径
        this.baseURL = process.env.NODE_ENV == 'production'?'/':'http://dx.xddtech.com'
        // 超时时间
        this.timeout = 3000
        // 存放每次请求
        this.queue = {}
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    setInterceptor(instance,url){
        // 请求拦截
        instance.interceptors.request.use((config)=>{
            if(localStorage.token){
                config.headers.Authorization = 'Bearer ' + localStorage.token
            }
            if(Object.keys(this.queue).length === 0){
                store.commit('showLoading')// 懒加载开始
            }
            this.queue[url] = url
            // 设置请求头
            return config
        })
        // 响应拦截
        instance.interceptors.response.use((res)=>{
            delete this.queue[url] // 每次请求后删一项
            if(Object.keys(this.queue).length === 0){
                store.commit('hideLoading')// 懒加载结束
            }
            return res.data
        })
    }
    request(options){
        let instance = axios.create() // axios实例
        this.setInterceptor(instance,options.url)
        let config = this.merge(options)
        return instance(config) // axios返回promise
    }
}
export default new Ajax