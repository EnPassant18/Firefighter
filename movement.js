let moveDirection = "none";
const MAX_POSITION = (world.width - 5) * CELL_SIZE
const LEFT_KEY_CODE = 37
const RIGHT_KEY_CODE = 39
const SPACE_KEY_CODE = 32

document.onkeydown = function(event) {
    if (event.keyCode == LEFT_KEY_CODE) { 
        moveDirection = "left";
    } else if (event.keyCode == RIGHT_KEY_CODE) { 
        moveDirection = "right";
    } else if (event.keyCode == SPACE_KEY_CODE) { // Spacebar
        world.shoot(Math.round(parseInt(document.getElementById("player").style.left) / 10 + 2));
    }
}

document.onkeyup = function(event) {
    if (event.keyCode == LEFT_KEY_CODE || event.keyCode == RIGHT_KEY_CODE) { 
        moveDirection = "none";
    }
}

/* Direction is a velocity vector. Moves player x times 
by its magnitude in its direction (+/i), where x
is the quantity argument. */
function move(direction, quantity) {
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
        if (++i == quantity) clearInterval(interval);
    }, 3)
}

setInterval(function() {
    if (moveDirection == "left") {
        move(-1, 10)
    } else if (moveDirection == "right") {
        move(1, 10)
    } 
}, 30)