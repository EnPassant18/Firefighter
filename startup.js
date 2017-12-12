let REFRESH_RATE = 100
const SPAWN_AREA_HEIGHT = 10
const WORLD_HEIGHT = 80
const WORLD_WIDTH = 120
const CELL_SIZE = 10
world = new World(WORLD_WIDTH, WORLD_HEIGHT + SPAWN_AREA_HEIGHT);
world.draw();
setInterval(function() {
    world.advance();
    world.update();
}, REFRESH_RATE);