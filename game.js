World.prototype.isGameWon = function() {
    for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (this.grid[row][col] == "red") { return false }
        }
    }
    return true
}

World.prototype.isGameLost = function() {
    const row = this.height - 1;
    for (let col = 0; col < this.width; col++) {
        if (this.grid[row][col] == "red") { return true }
    }
    return false
}

World.prototype.reset = function() {
    this.grid = array2d(this.height, this.width, () => "dead");
    document.getElementById("player").style.left = `${CELL_SIZE*(this.width / 2 - 2)}px`;
}

let waves = Array(20);

waves[0] = function() {
    world.spawnTub(10, 9);
    world.spawnTub(10, 29);
    world.spawnTub(10, 49);
    world.spawnTub(10, 69);
}

waves[1] = function() {
    world.spawnBlock(10, 9);
    world.spawnBlock(10, 29);
    world.spawnBlock(10, 49);
    world.spawnBlock(10, 69);
}

waves[2] = function() {
    world.spawnShip(10, 38);
}

let currentWave = -1;
gameLoop = setInterval(function() {
    world.advanceRed();
    world.advanceBlue();
    world.update();
    if (world.isGameWon()) {
        world.reset();
        currentWave += 1;
        waves[currentWave]();
    } else if (world.isGameLost()) {
        clearInterval(gameLoop);
        alert("You lost");
    }
}, REFRESH_RATE);