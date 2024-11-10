type MapPerson<Type> = {
    -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
    name?: string
    readonly age: number
}

type IPersonOptional = MapPerson<IPerson>


const p: IPersonOptional = {
    name: "陈家伟",
    age: 23
}


export { }