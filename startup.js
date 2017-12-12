let REFRESH_RATE = 100
const SPAWN_AREA_HEIGHT = 10
const WORLD_HEIGHT = 80
const WORLD_WIDTH = 120
const CELL_SIZE = 10
const startState = array2d(SPAWN_AREA_HEIGHT + WORLD_HEIGHT, WORLD_WIDTH, () => false);
world = new World(startState);
world.init();
setInterval(function() {
    world.advance();
    world.update();
}, REFRESH_RATE);