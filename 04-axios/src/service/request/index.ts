import axios from "axios"
import type { AxiosInstance } from "axios"   //兼容

class NEWRequest {
    instance: AxiosInstance
    constructor(config: any) {
        this.instance = axios.create(config)
    }
}

export default NEWRequest