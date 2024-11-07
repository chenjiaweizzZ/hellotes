interface IState {
    name: string
    age: number
}

interface IStore {
    state: IState
    eating: () => void
    running: () => void
}

const store: IStore & ThisType<IState> = {
    state: {
        name: "why",
        age: 18
    },
    eating: function() {
        console.log(this.name)
    },
    running: function() {
        console.log(this.name)
    }
}

store.eating.call(store.state)