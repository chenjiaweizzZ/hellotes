type NewType = number & string  //没有意义

//通常是将两个对象类型交叉在一起

interface Ikun {
    name: string
    age: number
}

interface ICoder {
    name: string
    coding: () => void
}

const personMix: Ikun & ICoder = {
    name: "陈家伟",
    age: 18,
    coding: function() {
        console.log("coding")
    }
}

