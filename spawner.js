/* Kills everything in the spawn area (to prevent intereference with spawning)
World.prototype.clearSpawnArea = function() {
    for (let row = 0; row < SPAWN_AREA_HEIGHT; row++) {
        for (let col = 0; col < this.width; col++) {
            this.grid[row][col] = "dead"
        }
    }
} */

// Creates a block in the given location
World.prototype.spawnBlock = function(row, col) {
    this.grid[row][col] = 
    this.grid[row][col + 1] = 
    this.grid[row + 1][col] =
    this.grid[row + 1][col + 1] =
    "red";
}

// Creates a tub in the given location
World.prototype.spawnTub = function(row, col) {
    this.grid[row + 1][col] = 
    this.grid[row + 1][col + 2] = 
    this.grid[row][col + 1] = 
    this.grid[row + 2][col + 1] = 
    "red";
}

// Creates a hive in the given location
World.prototype.spawnHive = function(row, col) {
    this.grid[row + 1][col] = 
    this.grid[row + 1][col + 3] = 
    this.grid[row][col + 1] =
    this.grid[row][col + 2] = 
    this.grid[row + 2][col + 1] = 
    this.grid[row + 2][col + 2] = 
    "red";
}

/* Creates a glider in the given location
and facing the given direction ("right"/"left") */
World.prototype.spawnGlider = function(col, row, direction) {
    this.grid[row][col + 1] = 
    this.grid[row + 2][col] = 
    this.grid[row + 2][col + 1] =
    this.grid[row + 2][col + 2] =
    "red";
    if (direction == "right") {
        this.grid[row + 1][col + 2] = "red";
    } else if (direction == "left") {
        this.grid[row + 1][col] = "red";
    }
}

// Creates a ship, facing down, in the given location
World.prototype.spawnShip = function(row, col) {
    this.grid[row][col] = 
    this.grid[row][col + 2] = 
    this.grid[row + 1][col + 3] = 
    this.grid[row + 2][col + 3] = 
    this.grid[row + 3][col] = 
    this.grid[row + 3][col + 3] =
    this.grid[row + 4][col + 1] = 
    this.grid[row + 4][col + 2] = 
    this.grid[row + 4][col + 3] =  
    "red";
}

World.prototype.shoot = function(col) {
    this.grid[this.height - 2][col - 1] =
    this.grid[this.height - 2][col] =
    this.grid[this.height - 2][col + 1] = 
    "blue";
}