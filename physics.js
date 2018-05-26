// (Number, Number, (Number, Number) => Any) => Array[Array[Any]]
// Generates a 2D array of given height and width using a given generator function
function array2d(height, width, generator) {

    let output = Array.from(
        Array(height),
        () => Array.from(Array(width)));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            output[row][col] = generator(row, col);
        }
    }

    return output;
}



class World {

    constructor(height, width) {
        this.width = width;
        this.height = height;
        this.reset();
    }

    /* Given a row, column and color, returns the number of living neighbors
    of the cell in that position and of that color. */
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

    // Returns a table of the number of red neighbors of each cell of a given color
    _countNeighbors() {
        return array2d(this.height, this.width, this._countNeighborsSingle.bind(this));
    }

    // Returns the next generation world state
    _getNextGen() {
        const countTable = this._countNeighbors();
        return array2d(this.height, this.width, function(row, col) {
            if (countTable[row][col] == 3) {
                return true;
            } else if (countTable[row][col] != 2) {
                return false;
            } else {
                return this.grid[row][col];
            }
        }.bind(this))
    }

    // Advances all cells to the next generation
    advance() {
        this.grid = this._getNextGen();
    }

    reset() {
        this.grid = array2d(this.height, this.width, () => false);
    }
}