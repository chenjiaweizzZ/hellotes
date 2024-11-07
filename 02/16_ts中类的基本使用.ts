class Person {
    //类中有成员属性,成员属性必须要类里声明
    name: string = ""
    age: number = 0
    // name = ""
    // age = 0
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name,"eating")
    }
}

const p1 = new Person("陈家伟", 23)
const p2 = new Person("陈晓薇", 24)

export {}