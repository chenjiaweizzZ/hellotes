interface IKun<Type> {
    name: Type,
    age: number,
    slogan: Type
}

const kun1: IKun<string> = {
    name: "陈家伟",
    age: 24,
    slogan: "hello"
}

export { }