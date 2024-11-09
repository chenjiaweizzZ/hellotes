function useState<Type>(initState: Type): [Type, (newState: Type) => void] {
    let state = initState
    function setState(newState: Type) {
        state = newState
    }
    return [state, setState]
}

const [count, setCount] = useState<number>(100)
const [message, setMessage] = useState<string>("hello")
const [list, setList] = useState<any[]>([])


export { }