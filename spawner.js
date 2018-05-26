class Pattern {
    
    /* Cells argument is an array of ordered pairs that specify the coordinates of each cell
    in the pattern, relative to the top-left corner. Type argument is a string, e.g. "ship". */
    constructor(cells) {
        this.cells = cells;
    }

    // Row, col arguments are numbers that specify the top-left corner of each pattern.
    spawn(world, row, col, flipVertical = false, flipHorizontal = false, flipXY = false) {
        let cells = this.cells;
        if (flipVertical) {
            const maxCol = Math.max(...cells.map((cell) => cell[1]));
            cells = cells.map((cell) => [cell[0], maxCol - cell[1]]);
        }
        if (flipHorizontal) {
            const maxRow = Math.max(...cells.map((cell) => cell[0]));
            cells = cells.map((cell) => [maxRow - cell[0], cell[1]]);
        }
        if (flipXY) cells = cells.map((cell) => [cell[1], cell[0]]);
        for (let cell of cells) {
            world.grid[row + cell[0]][col + cell[1]] = true;
        }
    }
}

/* light ship, heavy ship, turtle */
Pattern.patterns = [
    new Pattern([
        [0, 1], [1, 0], [1, 1],
        [1, 2], [2, 0], [2, 2],
        [2, 3], [3, 1], [3, 2], 
        [3, 3], [4, 1], [4, 2]]),
    new Pattern([
        [0, 1], [0, 3], [1, 4],
        [2, 0], [2, 4], [3, 0],
        [3, 4], [4, 4], [5, 1], 
        [5, 4], [6, 2], [6, 3],
        [6, 4]]),
    new Pattern([
        [4, 0], [5, 0],
        [0, 1], [1, 1], [3, 1], [6, 1], [8, 1], [9, 1],
        [0, 2], [1, 2], [8, 2], [9, 2],
        [0, 3], [2, 3], [7, 3], [9, 3],
        [2, 4], [3, 4], [6, 4], [7, 4],
        [1, 5], [2, 5], [4, 5], [5, 5], [7, 5], [8, 5],
        [3, 6], [6, 6],
        [1, 7], [8, 7],
        [1, 8], [8, 8],
        [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10],
        [0, 11], [1, 11], [8, 11], [9, 11]
    ])
] 

Pattern.spawnWeights = [0.3, 0.6, 0.1];

Pattern.spawnSquareGenerators = [
    () => 17 + Math.round(12 * Math.random()),
    () => 17 + Math.round(12 * Math.random()),
    () => 20
]

Pattern.spawnRandom = function(world) {
    let random = Math.random();
    for (let pattern = 0; pattern < Pattern.patterns.length; pattern++) {
        if (random < Pattern.spawnWeights[pattern]) {
            Pattern.patterns[pattern].spawn(world, 
                Pattern.spawnSquareGenerators[pattern](), 
                Pattern.spawnSquareGenerators[pattern](),
                Math.random() > 0.5, Math.random() > 0.5, Math.random() > 0.5);
            return;
        } else {
            random -= Pattern.spawnWeights[pattern];
        }
    }
}

/*
glider = new Pattern([[0, 1], [2, 0], [2, 1], [2, 2], [1, 2]]);

Pattern.rPentomino = new Pattern([[0, 2], [1, 0], [1, 1], [1, 2], [2, 1]], "methuselah");

Pattern.acorn = new Pattern([[0, 0], [1, 0], [2, 0], [3, 1], [5, 0], [6, 0], [5, 2]], "methuselah");

Pattern.piHeptomino = new Pattern([[0, 0], [1, 0], [2, 0], [1, 2], [0, 2], [2, 1], [2, 2]], "methuselah");

Pattern.dozenGliders = new Pattern([[0, 0], [0, 1], [1, 0], [2, 0], [1, 4], [0, 4], [2, 3], [2, 4]], "methuselah");
*/