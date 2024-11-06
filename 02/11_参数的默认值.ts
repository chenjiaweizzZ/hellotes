
function foo(x: number, y: number = 100) {
    if (typeof y !== 'undefined') {
        return x + y
    } else {
        return x
    }
}

export { } 