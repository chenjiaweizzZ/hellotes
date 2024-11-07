type IPerson = {
    name: string
    //?:可选属性
    age?: number
    //readonly: 只读
    readonly height: number
}

interface IKun {
    name: string
    slogan: string
}

export {}