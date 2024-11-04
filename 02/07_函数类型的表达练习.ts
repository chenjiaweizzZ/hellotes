type CalcType = (num1: number, num2: number) => number

function calc(calcFn: CalcType) {
    const num1 = 1
    const num2 = 2
    calcFn(num1, num2)
}

function sum(num1: number, num2: number) {
    return num1 + num2
}

calc(sum)


export { }