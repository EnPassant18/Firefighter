let moveDirection = "none";
const MAX_POSITION = (world.width - 3) * CELL_SIZE
const LEFT_KEY_CODE = 37
const RIGHT_KEY_CODE = 39
const SPACE_KEY_CODE = 32

document.onkeydown = function(event) {
    if (event.keyCode == LEFT_KEY_CODE) { 
        moveDirection = "left";
    } else if (event.keyCode == RIGHT_KEY_CODE) { 
        moveDirection = "right";
    } else if (event.keyCode == SPACE_KEY_CODE) {
        world.shoot(Math.round(parseInt(document.getElementById("player").style.left) / CELL_SIZE + 1));
    } else if (event.shiftKey == true) {
        world.clearBlue()
    }
}

document.onkeyup = function(event) {
    if (event.keyCode == LEFT_KEY_CODE || event.keyCode == RIGHT_KEY_CODE) { 
        moveDirection = "none";
    }
}

/* Direction input is a velocity vector. Moves player 5 times 
by its magnitude in its direction. */
function move(direction) {
    let i = 0
    let interval = setInterval(function() {
        const newPosition = parseInt(document.getElementById("player").style.left) + direction
        if (newPosition < 0) {
            document.getElementById("player").style.left = "0px";
        } else if (newPosition >= MAX_POSITION) {
            document.getElementById("player").style.left = MAX_POSITION + "px";
        } else {
            document.getElementById("player").style.left = newPosition + "px";
        }
        if (++i == 10) clearInterval(interval);
    }, 1)
}

setInterval(function() {
    if (moveDirection == "left") {
        move(-3)
    } else if (moveDirection == "right") {
        move(3)
    } 
}, 50)

World.prototype.clearBlue = function() {
    for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (this.grid[row][col] == "blue") { this.grid[row][col] = "dead" }
        }
    }
}