interface IBar {
    name: string
    age: number
    //函数签名
    (num1: number): number
}

const bar: IBar = (num: number): number => {
    return num
}

bar.name = "陈家伟"
bar.age = 123


export { }