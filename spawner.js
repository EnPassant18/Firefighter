// Kills everything in the spawn area (to prevent intereference with spawning)
World.prototype.clearSpawnArea = function() {
    for (let row = 0; row < SPAWN_AREA_HEIGHT; row++) {
        for (let col = 0; col < this.width; col++) {
            this.grid[row][col] = "dead"
        }
    }
}

/* Creates a glider in the spawning area centered on the given column
and facing the given direction (right/left) */
World.prototype.spawnGlider = function(col, direction) {
    this.grid[SPAWN_AREA_HEIGHT - 3][col] = 
    this.grid[SPAWN_AREA_HEIGHT - 1][col - 1] = 
    this.grid[SPAWN_AREA_HEIGHT - 1][col] = 
    this.grid[SPAWN_AREA_HEIGHT - 1][col + 1] =
    "red";
    if (direction == "right") {
        this.grid[SPAWN_AREA_HEIGHT - 2][col + 1] = "red";
    } else if (direction == "left") {
        this.grid[SPAWN_AREA_HEIGHT - 2][col - 1] = "red";
    }
}

// Creates a ship in the spawning area, facing down, centered on the given column
World.prototype.spawnShip = function(col) {
    this.grid[SPAWN_AREA_HEIGHT - 5][col - 2] = 
    this.grid[SPAWN_AREA_HEIGHT - 5][col] = 
    this.grid[SPAWN_AREA_HEIGHT - 4][col + 1] = 
    this.grid[SPAWN_AREA_HEIGHT - 3][col + 1] = 
    this.grid[SPAWN_AREA_HEIGHT - 2][col - 2] = 
    this.grid[SPAWN_AREA_HEIGHT - 2][col + 1] =
    this.grid[SPAWN_AREA_HEIGHT - 1][col - 1] = 
    this.grid[SPAWN_AREA_HEIGHT - 1][col] = 
    this.grid[SPAWN_AREA_HEIGHT - 1][col + 1] =  
    "red";
}

// Creates a ship in the shooting area, facing up, centered on the given column
World.prototype.shoot = function(col) {
    this.grid[this.height - 2][col - 2] = 
    this.grid[this.height - 2][col] = 
    this.grid[this.height - 3][col + 1] = 
    this.grid[this.height - 4][col + 1] = 
    this.grid[this.height - 5][col - 2] = 
    this.grid[this.height - 5][col + 1] =
    this.grid[this.height - 6][col - 1] = 
    this.grid[this.height - 6][col] = 
    this.grid[this.height - 6][col + 1] =  
    "blue";
}