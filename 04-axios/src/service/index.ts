import { BASE_URL, TIME_OUT } from "./config";
import NEWRequest from "./request";

// const config = {
//     baseURL: BASE_URL,
//     timeout: TIME_OUT,
//     interceptors: {
//         fn1: function () { },
//         fn2: function () { },
//         fn3: function () { },
//         fn4: function () { }
//     }
// }


const NewRequest = new NEWRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestSuccessFn: (config) => {
            console.log(111)
            return config
         },
        requestFailFn: (err) => { 
            console.log(222)
            return err
        },
        responseSuccessFn: (res) => { 
            console.log(333)
            return res
        },
        responseFailFn: (err) => { 
            console.log(444)
            return err
        },
    }
})



export default NewRequest