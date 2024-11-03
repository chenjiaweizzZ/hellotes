// type pointType = { x: number, y: number, z?: number }

//接口 interface
interface pointType2 {
    x: number,
    // y: number,
    // z?: number
}

interface pointType2 {  //多次声明
    // x: number,
    y: number,
    z?: number
}
function printCoordinate(point: pointType2) {
    console.log(point.x, point.y)
}

interface IPerson {
    name: string,
    age: number
}
// interface IPerson {
//     height: number,
//     weight: number
// }

interface IPerson2 extends IPerson {
    height: number,
     weight: number
}

const me: IPerson2 = {
    name: "陈家伟",
    age: 18,
    height: 1.88,
    weight: 65
}


export { }

// 区别一: type类型使用范围更广,interface只能声明对象类型
// 区别二: 在声明对象时候,interface可以多次声明,type不允许两个相同的名称存在
// 区别三: interface支持继承
// 区别四: interface可以被类实现
// 非对象类型定义使用type, 对象类型是interface