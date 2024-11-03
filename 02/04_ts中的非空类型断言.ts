interface IPerson {
    name: string,
    age: number,
    friend?: {
        name: string
    }
}

const jake: IPerson = {
    name: "jake",
    age: 13
}

console.log(jake?.friend?.name)

if (jake.friend && jake.friend.name) {
    jake.friend.name = "lusi"
}

//非空类型断言 确定有friend属性
jake.friend!.name = "lusi"

export { }