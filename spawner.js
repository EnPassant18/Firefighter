class Pattern {
    
    /* Cells argument is an array of ordered pairs that specify the coordinates of each cell
    in the pattern, relative to the top-left corner. Type argument is a string, e.g. "ship". */
    constructor(cells, type) {
        this.cells = cells;
        this.type = type;
    }

    // Row, col arguments are numbers that specify the top-left corner of each pattern.
    spawn(row, col, flipVertical = false, flipHorizontal = false) {
        if (flipVertical) {
            const maxCol = Math.max(...this.cells.map((cellCoords) => cellCoords[1]));
            if (flipHorizontal) {
                const maxRow = Math.max(...this.cells.map((cellCoords) => cellCoords[1]));
                for (let cellCoords of this.cells) {
                    world.grid[row + maxRow - cellCoords[0]][col + maxCol - cellCoords[1]] = "red";
                }
            } else {
                for (let cellCoords of this.cells) {
                    world.grid[cellCoords[0] + row][col + maxCol - cellCoords[1]] = "red";
                }
            }
        } else {
            if (flipHorizontal) {
                const maxRow = Math.max(...this.cells.map((cellCoords) => cellCoords[1]));
                for (let cellCoords of this.cells) {
                    world.grid[row + maxRow - cellCoords[0]][cellCoords[1] + col] = "red";
                }
            } else {
                for (let cellCoords of this.cells) {
                    world.grid[cellCoords[0] + row][cellCoords[1] + col] = "red";
                }
            }
        }
        
    }
}

const block = new Pattern([[0, 0], [0, 1], [1, 0], [1, 1]], "still life");

const tub = new Pattern([[1, 0], [0, 1], [1, 2], [2, 1]], "still life");

const boat = new Pattern([[0, 0], [1, 0], [0, 1], [1, 2], [2, 1]], "still life");

const hive = new Pattern([[1, 0], [0, 1], [0, 2], [1, 3], [2, 1], [2, 2]], "still life");

const stillShip = new Pattern([[0, 0], [1, 0], [0, 1], [1, 2], [2, 2], [2, 1]], "still life");

const loaf = new Pattern([[1, 0], [0, 1], [0, 2], [1, 3], [2, 3], [3, 2], [2, 1]], "still life");

const bigBarge = new Pattern([
    [1, 0], [0, 1], [1, 2], [2, 1],
    [3, 2], [2, 3], [3, 4], [4, 3],
], "still life");

const pond = new Pattern([
    [1, 0], [0, 1], [0, 2], [2, 0],
    [3, 2], [2, 3], [3, 1], [1, 3],
], "still life");


const blinker = new Pattern([[0, 0], [0, 1], [0, 2]], "oscillator")

const toad = new Pattern([[0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [1, 3]], "oscillator")

const beacon = new Pattern([[0, 0], [0, 1], [1, 0], [2, 3], [3, 2], [3, 3]], "oscillator")

const clock = new Pattern([[0, 2], [1, 0], [1, 2], [2, 1], [2, 3], [3, 1]], "oscillator")

const pentadecathlon = new Pattern([
    [1, 0], [1, 1], [1, 3], 
    [1, 4], [1, 5], [1, 6],
    [1, 8], [1, 9], [0, 2], 
    [0, 7], [2, 2], [2, 7]
], "oscillator")


const glider = new Pattern([[0, 1], [2, 0], [2, 1], [2, 2], [1, 2]], "ship");

const lightShip = new Pattern([
    [0, 0], [0, 2], [1, 3],
    [2, 3], [3, 0], [3, 0],
    [3, 3], [4, 1], [4, 2], 
    [4, 3]
], "ship");

const midShip = new Pattern([
    [0, 1], [0, 3], [1, 4],
    [2, 0], [2, 4], [3, 4],
    [4, 1], [4, 4], [5, 2], 
    [5, 3], [5, 4]
], "ship");

const heavyShip = new Pattern([
    [0, 1], [0, 3], [1, 4],
    [2, 0], [2, 4], [3, 0],
    [3, 4], [4, 4], [5, 1], 
    [5, 4], [6, 2], [6, 3],
    [6, 4] 
], "ship");


const rPentomino = new Pattern([[0, 2], [1, 0], [1, 1], [1, 2], [2, 1]], "methuselah")

const acorn = new Pattern([[0, 0], [1, 0], [2, 0], [3, 1], [5, 0], [6, 0], [5, 2]], "methuselah")

const piHeptomino = new Pattern([[0, 0], [1, 0], [2, 0], [1, 2], [0, 2], [2, 1], [2, 2]], "methuselah")

const dozenGliders = new Pattern([[0, 0], [0, 1], [1, 0], [2, 0], [1, 4], [0, 4], [2, 3], [2, 4]], "methuselah")


const gosperGun = new Pattern([
    [0, 24], [1, 22], [1, 24],
    [2, 12], [2, 13], [2, 20],
    [2, 21], [2, 34], [2, 35],
    [3, 11], [3, 15], [3, 20],
    [3, 21], [3, 34], [3, 35],
    [4, 0], [4, 1], [4, 10],
    [4, 16], [4, 20], [4, 21],
    [5, 0], [5, 1], [5, 10],
    [5, 14],[5, 16], [5, 17],
    [5, 22], [5, 24], [6, 10],
    [6, 16], [6, 24], [7, 11],
    [7, 15], [8, 12], [8, 13]
], "gun")


const preBlock = new Pattern([[0, 0], [1, 0], [0, 1]], "partial")

const cowHead = new Pattern([
    [0, 1], [0, 2], [0, 3],
    [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 4], [3, 1],
    [3, 3], [4, 0], [4, 4]
], "partial")

