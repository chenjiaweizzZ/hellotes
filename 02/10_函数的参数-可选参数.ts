//y是作为联合类型 number | undefined
function foo(x: number, y?: number) {
    if (typeof y === 'number') {
        return x + y
    } else {
        return x
    }
}

export { } 