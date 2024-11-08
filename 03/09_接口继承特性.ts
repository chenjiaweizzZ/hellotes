interface IPerson {
    name: string
    age: number
}

//可以从其他接口中继承过来属性
//1.减少了相同代码的重复编写
//2.如果使用第三方库,定义了一些属性,想自定义接口同时希望自定义接口拥有第三方库的所有属性
interface IKun extends IPerson{
    slogan: string
}

const ikun: IKun = {
    name: "chen",
    age: 24,
    slogan: "你干嘛"
}

export {}