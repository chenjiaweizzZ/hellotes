type myNumber = number
const age: myNumber = 18

type IDType = number | string
function printID(id: IDType) {
    console.log(id)
}

type pointType = { x: number, y: number, z?: number }
function printCoordinate(point: pointType) : void  {
    console.log(point.x,point.y)
}

export default {}