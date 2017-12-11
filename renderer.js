// Draws the world
World.prototype.init = function() {
    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            let cell = document.createElement("div")
            cell.classList.add("cell");
            cell.classList.add(this.grid[row][col] ? "alive" : "dead");
            cell.id = `${row}-${col}`
            cell.style.position = "absolute"
            cell.style.top = `${10*(row - SPAWN_AREA_HEIGHT)}px`
            cell.style.left = `${10*col}px`
            document.getElementById("world").appendChild(cell)
        }
    }
}

// Advances the world by a generation and updates the rendering
World.prototype.update = function() {
    const updatedTable = this.advance()
    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (updatedTable[row][col] === true) {
                document.getElementById(`${row}-${col}`).classList.replace("dead", "alive")
            } else if (updatedTable[row][col] === false) {
                document.getElementById(`${row}-${col}`).classList.replace("alive", "dead")
            }
        }
    }
}