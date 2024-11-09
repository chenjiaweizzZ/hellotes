enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const d1: Direction = Direction.UP

function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log("left")
            break
    }
}

turnDirection(Direction.LEFT)

export { }