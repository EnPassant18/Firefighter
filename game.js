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

// Generate random integer between 0 and (max - 1)
let randInt = (max) => Math.floor(Math.random() * max);

World.prototype.randomWave = function(waveNumber) {
    const ASH_MAX = 3;
    let shipFunction = (start) => Math.min((waveNumber - start) / 5, 3)
    let i = 0;
    while (i < randInt(ASH_MAX)) {
        block.spawn(randInt(50), randInt(79));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        tub.spawn(randInt(50), randInt(78));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        bigBarge.spawn(randInt(50), randInt(77), randInt(2), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        hive.spawn(randInt(50), randInt(77));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        loaf.spawn(randInt(50), randInt(77), randInt(2), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        pond.spawn(randInt(50), randInt(77));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        blinker.spawn(randInt(50), randInt(78));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        toad.spawn(randInt(50), randInt(77), randInt(2), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        beacon.spawn(randInt(50), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(ASH_MAX)) {
        clock.spawn(randInt(50), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(2))) {
        glider.spawn(randInt(45), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(4))) {
        lightShip.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(6))) {
        midShip.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(8))) {
        heavyShip.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(12))) {
        pentadecathlon.spawn(randInt(50), randInt(70), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(12))) {
        rPentomino.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(14))) {
        piHeptomino.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(16))) {
        acorn.spawn(randInt(40), randInt(77), randInt(2));
        i++;
    }
    i = 0;
    while (i < randInt(shipFunction(18))) {
        dozenGliders.spawn(randInt(50), randInt(77), randInt(2));
        i++;
    }
}

let currentWave = 1;
let countdown;
gameLoop = setInterval(function() {
    world.advanceRed();
    world.advanceBlue();
    world.update();
    if (world.isGameWon()) {
        world.reset();
        currentWave += 1;
        world.randomWave(currentWave);
        clearTimeout(countdown);
        countdown = setTimeout(function() {
            clearInterval(gameLoop);
            alert("You lost");
        }, 60000)
    } else if (world.isGameLost()) {
        clearInterval(gameLoop);
        alert("You lost");
    }
}, REFRESH_RATE);