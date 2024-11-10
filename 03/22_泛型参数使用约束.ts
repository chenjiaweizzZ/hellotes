function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

const info = {
    name: "陈家伟",
    age: 23
}

console.log(getObjectProperty(info, "name"))


export { }