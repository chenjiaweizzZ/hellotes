interface ICollection {
    // [index:number|string]:any
    //索引签名如果是[index: string]:any  => collection["0"]
    [index: number]: string
    length: number
}
function printCollection(collection: ICollection) {
    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i])
    }
}

const array = ["abc", "cba", "nba"]
const tuple: [string, string] = ["why", "kobe"]

printCollection(array)
printCollection(tuple)

export { }