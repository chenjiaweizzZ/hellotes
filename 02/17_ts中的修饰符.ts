// public修饰在任何地方可见,共有的属性或方法,默认编写的属性就是public
// private修饰的是仅在同一类中可见 私有的属性或者方法
// protected修饰的是仅在类自身及子类中可见 受保护的属性或者方法

class Person {
    protected name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    private eating() {
        console.log(this.name,this.age,"吃东西")
    }
}

const p = new Person("陈家伟",18)

// p.name = "kobe"不可访问

class Student extends Person {
    study() {
        console.log(this.name)
    }
}