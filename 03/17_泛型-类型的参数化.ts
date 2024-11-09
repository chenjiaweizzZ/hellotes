function bar<Type>(arg: Type) {
    return arg
}

const name = bar<string>("陈家伟")
const num = bar<number>(123)
const obj = bar<{ name: string }>({ name: "陈家伟" })
const name2 = bar("陈家伟")   //类型推导

export { }
