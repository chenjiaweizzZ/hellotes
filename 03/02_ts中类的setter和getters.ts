class Person {
    private _name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    set name(newValue: string) {
        //if配置
        this._name = newValue
    } 
    get name() {
        return this._name
    }
}

//创建一个实例
const p = new Person("陈家伟",23)
p.name = "kobe"

export {}