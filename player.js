document.onkeydown = function(event) {
    const previousPosition = parseInt(document.getElementById("player").style.left);
    // left arrow
    if (event.keyCode == 37) { 
        if (event.shiftKey) {
            if (previousPosition > 40) {
                document.getElementById("player").style.left = 
                (previousPosition - 50) + "px";
            } else {
                document.getElementById("player").style.left = "0px"
            }
        } else {
            if (previousPosition > 0) {
                document.getElementById("player").style.left = 
                (previousPosition - 10) + "px";
            } 
        }
    }
    // right arrow
    else if (event.keyCode == 39) {
        if (event.shiftKey) {
            if (previousPosition < (10*world.width - 90)) {
                document.getElementById("player").style.left = 
                (previousPosition + 50) + "px";
            } else {
                document.getElementById("player").style.left = 
                (10*world.width - 50) + "px"
            }
        } else {
            if (previousPosition < (10*world.width - 50)) {
                document.getElementById("player").style.left = 
                (previousPosition + 10) + "px";
            } 
        }
    }
    // spacebar
    else if (event.keyCode == 32) {
        world.shoot(previousPosition / 10 + 2)
    }
};