abstract class Shape {
    //getArea只有声明,没有实现体,定义未一个抽象方法
    //抽象方法必须出现在抽象类中
    //抽象方法子类必须实现
    abstract getArea()
}

class Rectangle extends Shape {
    constructor(public width: number,public height: number) {
        super()
    }
    getArea() {
        return this.width * this.height
    }
}
class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }
    getArea() {
        return this.radius ** 2 * 3.14
    }
}

//通用的函数
function calcArea(shape: Shape) {
    return shape.getArea()
}

calcArea(new Rectangle(10,20))
calcArea(new Circle(5))

