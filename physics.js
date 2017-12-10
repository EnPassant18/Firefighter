const GRID_HEIGHT = 500
const GRID_WIDTH = 800



// (Number, Number, (Number, Number) => Any) => Array[Array[Any]]
// Generates a 2D array of given height and width using a given generator function
function array2d(height, width, generator) {

    let output = Array.from(
        Array(height),
        () => Array.from(Array(width)));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            output[row][col] = generator(row, col);
        }
    }

    return output;
}



class World {

    constructor(grid) {
        this.grid = grid; // 2D boolean array of given width and height
        this.width = grid[0].length;
        this.height = grid.length;
    }

    /* Given a row and column, returns the number of living neighbors
    of the cell in that position. */
    _countNeighborsSingle(row, col) {
        let neighborRows;
        let neighborCols;

        if (row == 0) {
            neighborRows = [row, row + 1];
        } else if (row == this.height - 1) {
            neighborRows = [row - 1, row];
        } else {
            neighborRows = [row - 1, row, row + 1];
        }

        if (col == 0) {
            neighborCols = [col, col + 1];
        } else if (col == this.width - 1) {
            neighborCols = [col - 1, col];
        } else {
            neighborCols = [col - 1, col, col + 1];
        }

        let count = 0;
        for (let neighborRow of neighborRows) {
            for (let neighborCol of neighborCols) {
                if (this.grid[neighborRow][neighborCol]) {
                    count++;
                }
            }
        }
        if (this.grid[row][col]){
            count--;
        }
        
        return count;
    }

    // Returns a table of the number of living neighbors of each cell
    _countNeighbors() {
        let countTable = array2d(this.width, this.height, () => 0);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                countTable[row][col] = this._countNeighborsSingle(row, col)
            }
        }
        return countTable;
    }

    // Advances the world to the next generation, as per rules of Conway's Life
    advance() {
        let countTable =  this._countNeighbors()
        let switchTable = array2d(this.height, this.width, () => null)
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (countTable[row][col] == 3) {
                    this.grid[row][col] = true;
                    switchTable[row][col] = true;
                } else if (countTable[row][col] != 2) {
                    this.grid[row][col] = false;
                    switchTable[row][col] = false;
                }
            }
        }
    }
}