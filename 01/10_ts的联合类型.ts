// let foo: number | string = "abc"
// foo = 123

// if(typeof foo == "string") {  //类型缩小
//     console.log(foo.length)
// }

function printID(id: number | string) : void {
    console.log("您的id",id)
    if(typeof id === "string") {
        console.log(id.length)
    }else {
        console.log(id)
    }
}

printID("abc")
printID(123)

export default{}