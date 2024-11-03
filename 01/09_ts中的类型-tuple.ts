const list: any[] = ["陈家伟",123,1.88]
const value = list[0]
console.log(value)

const info = {
    name: "陈家伟",
    age: 18,
    height: 1.88
}

//元组类型
const list2: [string,number,number] = ["陈家伟",18,1.88]
const value2 = list2[1]  //明确知道类型

//函数中使用元组类型最多,特别是函数的返回值
function useState(initialState: any) : [number,(newValue: number) => void] {
    let stateValue = initialState
    function setValue(newValue: any) {
            stateValue = newValue
    }
    return [ stateValue,setValue ]
}

const [ count, setCount ] = useState(10)