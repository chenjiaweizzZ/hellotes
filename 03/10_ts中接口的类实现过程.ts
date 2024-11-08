interface IKun {
    name: string
    age: number
    slogan: string
    play: () => void
}

interface IRun {
    run: () => void
}

const ikun: IKun = {
    name: "why",
    age: 18,
    slogan: "你干嘛",
    play: function() {
        console.log("play")
    }
}

//接口被类实现
class Person implements IKun, IRun {
    name: string
    age: number
    slogan: string
    play() {
        console.log("ikun")
    }
    run() {
        console.log("running")
    }
}

const ikun2 = new Person()

export {}