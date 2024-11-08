interface IPerson {
    name: string
    age: number
}

// const info:IPerson = {
//     name: "why",
//     age: 18,
// }

//奇怪的现象1
const obj = {
    name: "why",
    age: 18,
    height: 1.88
}

const info:IPerson = obj   //没有做类型检测

//奇怪的现象2
function printPerson(person: IPerson) {}

const person = {name: "why",age:38,height:1.88}
// printPerson({name: "why",age:38,height:1.88})
printPerson(person)

//第一次创建的对象字面量标识为fresh(新鲜的),对于新鲜的字面量会进行严格的类型检测(必须完全满足类型要求,不能有多余的属性)
//第二次使用已经不是第一次创建的,不会再进行类型推导了

//当一个新的对象字面量分配给一个变量或传递给一个非空目标类型的参数时,对象字面量指定目标类型中不存在的属性是错误的
//当类型断言或者对象字面量的类型扩大时,新鲜度会消失

export {}