//在ts中，一个函数没有任何的返回类型,那么返回值的类型就是void类型
function getSum(num1: number, num2: number): void {
    console.log(num1 + num2)
}
//用来指定函数类型的返回值是void
// const foo: () => void = () => {
//     console.log(123)
// }
type fooType = () => void
const foo: fooType = () => {
    console.log("foo")
}
type fnType = (...args: any[]) => void
function delayFn(fn: fnType) {
    setTimeout(() => {
        fn()
    }, 1000);
}

delayFn((sex, age) => {
    console.log(sex, age)
})