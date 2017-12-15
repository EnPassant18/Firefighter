let moveDirection = "none";
const MAX_POSITION = (world.width - 3) * CELL_SIZE
const LEFT_KEY_CODE = 37
const RIGHT_KEY_CODE = 39
const SPACE_KEY_CODE = 32

document.onkeydown = function(event) {
    if (event.keyCode == LEFT_KEY_CODE) { 
        if (moveDirection != "left") {
            moveDirection = "left";
            move("left");
        }
    } else if (event.keyCode == RIGHT_KEY_CODE) { 
        if (moveDirection != "right") {
            moveDirection = "right";
            move("right");
        }
    } /*else if (event.keyCode == SPACE_KEY_CODE) {
        world.shoot(Math.round(parseInt(document.getElementById("player").style.left) / CELL_SIZE + 1));
    }*/
}

document.onkeyup = function(event) {
    if (event.keyCode == LEFT_KEY_CODE || event.keyCode == RIGHT_KEY_CODE) { 
        moveDirection = "none";
    }
}

// Moves player by one cell in given direction.
function move(direction) {
    const currentPosition = parseInt(document.getElementById("player").style.left);
    if (direction == "left" && currentPosition > 0 && moveDirection == "left") {
        document.getElementById("player").style.left = currentPosition - 15 + "px";
        setTimeout(move, 50, direction);
    } else if (direction == "right" && currentPosition < MAX_POSITION && moveDirection == "right") {
        document.getElementById("player").style.left = currentPosition + 15 + "px";
        setTimeout(move, 50, direction);
    }
}


World.prototype.shoot = function(col) {
    this.grid[this.height - 2][col - 1] =
    this.grid[this.height - 2][col] =
    this.grid[this.height - 2][col + 1] = 
    "blue";
}

setInterval(function() {
    world.shoot.call(world, parseInt(document.getElementById("player").style.left) / CELL_SIZE + 1)
}, 500)
    