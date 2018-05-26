const WORLD_HEIGHT = 50;
const WORLD_WIDTH = 50;
const CELL_SIZE = 12;
let game;
$(document).ready(() => {
    game = new Game(
        new World(WORLD_HEIGHT, WORLD_WIDTH),
        new Renderer($("#canvas")[0].getContext("2d"), CELL_SIZE, WORLD_WIDTH, WORLD_HEIGHT)
    );
    $(document).keydown(keyDownHandler);
    $(document).keyup(keyUpHandler);
})