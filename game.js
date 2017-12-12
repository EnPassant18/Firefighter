// Returns a random integer between min and (max - 1), inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function() {
    world.clearSpawnArea();
    world.spawnShip(getRandomInt(0, WORLD_WIDTH - 2));
}, 5000)