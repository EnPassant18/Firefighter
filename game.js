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


let currentWave = 14;
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