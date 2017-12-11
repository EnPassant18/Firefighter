REFRESH_RATE = 100
SPAWN_AREA_HEIGHT = 10
WORLD_HEIGHT = 80
WORLD_WIDTH = 120
const startState = array2d(SPAWN_AREA_HEIGHT + WORLD_HEIGHT, WORLD_WIDTH, () => false);
world = new World(startState);
world.init();
setInterval(function() {
    world.advance() 
    world.update() 
}, REFRESH_RATE);