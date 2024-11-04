const name: "why" = "why"
let age: 18 = 18

//将多个字面量结合起来
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"
const d2: Direction = "right"


//封装请求方式
type methodType = "post" | "get" | "delete" | "put"
function request(url: string, method: methodType) {
    console.log(123)
}

request("http://chenjiawei/api/getList", "post")

// const info: { url: string, method: "post" } = {
//     url: "http://chenjiawei/api/getList",
//     method: "post"
// }

const info = {
    url: "http://chenjiawei/api/getList",
    method: "post"
} as const  //强制变成自变量

// request(info.url, info.method as "post")
request(info.url, info.method)

export default {}