//获取dom <img>
// const imgEl = document.querySelector("img")
// if (imgEl !== null) {
//     imgEl.src = "XXX"
//     imgEl.alt = "LLL"
// }

//类型断言
const imgEl = document.querySelector("img") as HTMLImageElement
imgEl.src = "XXX"
imgEl.alt = "LLL"


//断言只能断言成具体的类型
const age: number = 18
const age2 = age as number