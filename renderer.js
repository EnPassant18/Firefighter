// Draws the world
World.prototype.draw = function() {

    let player = document.createElement("div");
    player.id = "player";
    player.style.top = `${CELL_SIZE*(this.height - SPAWN_AREA_HEIGHT - 1)}px`
    player.style.left = "0px"
    player.style.position = "absolute";
    player.style.zIndex = "1"
    document.getElementById("world").appendChild(player);

    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add(this.grid[row][col] ? "alive" : "dead");
            cell.id = `${row}-${col}`;
            cell.style.position = "absolute";
            cell.style.top = `${CELL_SIZE*(row - SPAWN_AREA_HEIGHT)}px`;
            cell.style.left = `${CELL_SIZE*col}px`;
            document.getElementById("world").appendChild(cell);
        }
    }
}

// Advances the world by a generation and updates the rendering
World.prototype.update = function() {
    const updatedTable = this.advance();
    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (updatedTable[row][col] === true) {
                document.getElementById(`${row}-${col}`).classList.replace("dead", "alive");
            } else if (updatedTable[row][col] === false) {
                document.getElementById(`${row}-${col}`).classList.replace("alive", "dead");
            }
        }
    }
}