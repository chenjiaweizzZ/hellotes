type pointType = { pointX: number, pointY: number, pointZ?: number }
function printPoint(point: pointType) {
    console.log(point.pointX, point.pointY)
}
printPoint({ pointX: 1, pointY: 2 })