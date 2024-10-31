// let id: string | number | { name: string, num: number } = "aaa"
let id: any = "aaa"
id = "bbb"
id = 123
id = { name: "陈家伟", num: 123 }

let id2: unknown = "aaa"
// console.log(id2.length)  //属性方法全部调用不了
if (typeof id2 === "string") {  //类型缩小
    console.log(id2.length)
}