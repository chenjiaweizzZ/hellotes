import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"   //兼容

//扩展
interface NEWInterceptors {
    // requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestSuccessFn: (config: any) => any
    requestFailFn: (err: any) => any
    responseSuccessFn: (res: AxiosResponse) => AxiosResponse
    responseFailFn: (err: any) => any
}
interface NEWRequestConfig extends AxiosRequestConfig {
    interceptors?: NEWInterceptors
}

class NEWRequest {
    instance: AxiosInstance
    constructor(config: NEWRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config) => {
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccessFn,
            config.interceptors?.requestFailFn
        )
        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccessFn,
            config.interceptors?.responseFailFn,
        )
    }

    //封装网络请求方法
    request(config: AxiosRequestConfig) {
        return this.instance.request(config)
    }
    // request(config: AxiosRequestConfig) {
    //     // return this.instance.request(config)
    //     return new Promise((resolve, reject) => {
    //         this.instance.request(config).then(res => {
    //             resolve(res)
    //         }).catch(err => {
    //             reject(err)
    //         })
    //     })
    // }
    get(config: AxiosRequestConfig) {
        return this.instance.request({...config,method: "GET"})
    }
    post(config: AxiosRequestConfig) {
        return this.instance.request({...config,method: "POST"})
    }
}

export default NEWRequest