// Draws the world
World.prototype.draw = function() {

    let player = document.createElement("div");
    player.id = "player";
    player.style.top = `${CELL_SIZE*(this.height - SPAWN_AREA_HEIGHT - 1)}px`;
    player.style.left = `${CELL_SIZE*(this.width / 2 - 2)}px`;
    player.style.position = "absolute";
    player.style.zIndex = "1";
    document.getElementById("world").appendChild(player);

    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("dead");
            cell.id = `${row}-${col}`;
            cell.style.position = "absolute";
            cell.style.top = `${CELL_SIZE*(row - SPAWN_AREA_HEIGHT)}px`;
            cell.style.left = `${CELL_SIZE*col}px`;
            document.getElementById("world").appendChild(cell);
        }
    }
}

// Updates the rendering to match the world grid state
World.prototype.update = function() {
    for (let row = SPAWN_AREA_HEIGHT; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            document.getElementById(`${row}-${col}`).classList.remove("dead");
            document.getElementById(`${row}-${col}`).classList.remove("red");
            document.getElementById(`${row}-${col}`).classList.remove("blue");
            document.getElementById(`${row}-${col}`).classList.add(this.grid[row][col]);
        }
    }
}