class Person {
    readonly name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

//创建一个实例
const p = new Person("陈家伟",23)
// p.name = "fhaof"  只读属性不能进行写入操作

export {}