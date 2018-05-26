class Game {

    constructor(world, renderer) {
        this.world = world;
        this.renderer = renderer;
        this.padSize = 8;
        this.padLocation = Math.round((world.width - this.padSize) / 2);
        this.score = 0;
        this.started = false;
        this._isPowerActive = false;
    }

    get advancePeriod() {
        return 20 * (this.score + 50) /  (this.score + 20);
    }

    get paddleMovePeriod() {
        return 20 * (this.score + 50) /  (this.score + 20);
    }

    get spawnPeriod() {
        return 1000 * (this.score + 40) /  (this.score + 10);
    }

    get isPowerActive() {
        return this._isPowerActive;
    }

    set isPowerActive(newValue) {
        this._isPowerActive = newValue;
        if (this.started) this.renderer.drawPads(this.padLocation, this.padSize, this.isPowerActive);
    }

    start() {
        this.started = true;
        this.renderer.drawPads(this.padLocation, this.padSize, this.isPowerActive);
        setTimeout(this._spawnLoop.bind(this), this.spawnPeriod / 2);
        this._advanceLoop();
        setTimeout(() => this.isPowerActive = true, 10000);
    }

    movePads(direction) {
        if (this.started) {
            if (direction === MOVE_DIRECTION.LEFT) {
                this.padLocation = Math.max(0, this.padLocation - 1);
            } else {
                this.padLocation = Math.min(this.world.width - this.padSize, this.padLocation + 1);
            }
            this.renderer.drawPads(this.padLocation, this.padSize, this.isPowerActive);
        }
    }

    power() {
        if (this.isPowerActive) {
            this.world.reset();
            this.renderer.flash();
            this.isPowerActive = false;
            setTimeout(() => this.isPowerActive = true, 10000);
        }
    }

    _spawnLoop() {
        if (this.started) {
            Pattern.spawnRandom(this.world);
            this.score++;
            setTimeout(this._spawnLoop.bind(this), this.spawnPeriod);
        }
    }

    _advanceLoop() {
        if (this.started) {
            this.world.advance();
            this._checkBoundaries();
            this.renderer.update(this.world.grid);
            if (this.started) setTimeout(this._advanceLoop.bind(this), this.advancePeriod);
        }
    }

    _checkBoundaries() {
        // top
        for (let col = 0; col < this.world.width; col++) {
            if (this.world.grid[0][col]) {
                if (col >= (this.world.width - this.padLocation - this.padSize)
                    && col < (this.world.width - this.padLocation)) {
                    this.world.grid[0][col] = false;
                } else {
                    this._gameOver(); 
                } 
            }
        }
        // bottom
        for (let col = 0; col < this.world.width; col++) {
            if (this.world.grid[this.world.height - 1][col]) {
                if (col >= this.padLocation && col < this.padLocation + this.padSize) {
                    this.world.grid[this.world.height - 1][col] = false;
                } else {
                    this._gameOver(); 
                }
            }
        }
        // left
        for (let row = 0; row < this.world.height; row++) {
            if (this.world.grid[row][0]) {
                if (row >= this.padLocation && row < this.padLocation + this.padSize) {
                    this.world.grid[row][0] = false;
                } else {
                    this._gameOver(); 
                }
            }
        }
        // right
        for (let row = 0; row < this.world.height; row++) {
            if (this.world.grid[row][this.world.width - 1]) {
                if (row >= (this.world.height - this.padLocation - this.padSize)
                && row < (this.world.height - this.padLocation)) {
                    this.world.grid[row][this.world.width - 1] = false;
                } else {
                    this._gameOver(); 
                }
            }
        }
    }

    _gameOver() {
        this.started = false;
        this.world.reset();
        setTimeout(() => this.renderer.gameOver(this.score), 10);
        game = new Game(this.world, this.renderer);
    }
}

/*
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
*/