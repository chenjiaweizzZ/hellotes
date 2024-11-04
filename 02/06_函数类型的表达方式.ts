// const bar: (num1: number) => number = (arg: number): number => {
//     return 123
// }

type barType = (num1: number) => number

const bar: barType = (arg: number): number => {
    return 123
}

export { }