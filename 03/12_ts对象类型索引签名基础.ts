interface IPerson {
    name: string
    age: number
}

const p: IPerson = {
    name: "chen",
    age: 18
}

console.log(p.name)

interface InfoType {
    //索引签名:可以通过字符串索引,去获取到一个值,也是字符串
    [key: string]: string
}
function getInfo(): InfoType {
    const abc: any = "hahah"
    return abc
}

const info = getInfo()

const name = info["name"]
console.log(info.name)

export {}