const ENTER_KEY_CODE = 13;
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;
const SPACE_KEY_CODE = 32;
let moveLoop = null;

function keyDownHandler(event) {
    switch (event.keyCode) {
        case ENTER_KEY_CODE: if (!game.started) game.start(); break;
        case LEFT_KEY_CODE: startMoving(MOVE_DIRECTION.LEFT); break;
        case RIGHT_KEY_CODE: startMoving(MOVE_DIRECTION.RIGHT); break;
        case SPACE_KEY_CODE: event.preventDefault(); game.power(); break;
    }
};

function keyUpHandler(event) {
    if (event.keyCode == LEFT_KEY_CODE
        || event.keyCode == RIGHT_KEY_CODE) { 
        stopMoving()
    }
}

function startMoving(direction) {
    if (moveLoop === null) {
        moveLoop = setInterval(() => {
            game.movePads(direction);
        }, game.paddleMovePeriod);
    }
}

function stopMoving() {
    clearInterval(moveLoop);
    moveLoop = null;
}

MOVE_DIRECTION = {
    LEFT: true,
    RIGHT: false
}