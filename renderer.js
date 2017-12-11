World.prototype.init = function() {
    for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            let cell = document.createElement("div")
            cell.classList.add("cell");
            cell.classList.add(this.grid[row][col] ? "alive" : "dead");
            cell.id = `${row}-${col}`
            cell.style.position = "absolute"
            cell.style.top = `${10*row}px`
            cell.style.left = `${10*col}px`
            document.getElementById("world").appendChild(cell)
        }
    }
}

World.prototype.update = function() {
    const updateTable = this.advance()
    for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (updateTable[row][col] === true) {
                document.getElementById(`${row}-${col}`).classList.replace("dead", "alive")
            } else if (updateTable[row][col] === false) {
                document.getElementById(`${row}-${col}`).classList.replace("alive", "dead")
            }
        }
    }
}