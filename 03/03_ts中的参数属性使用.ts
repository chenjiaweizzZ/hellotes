class Person {
    constructor(public name: string, private age: number, readonly height: number) {
        this.name = name
        this.age = age
    }
}

//创建一个实例
const p = new Person("陈家伟",23,2.3)
console.log(p.name)

export {}