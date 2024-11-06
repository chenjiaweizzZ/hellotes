//+运算符不能作用于联合类型
// function add(arg1: number | string, arg2: number | string) {
//     console.log(arg1 + arg2)
// }


//重载写法
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

function add(arg1: any, arg2: any) {
    return arg1 + arg2
}

add(10, 20)
add("陈家伟", "2336")

export { }