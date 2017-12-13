// (Number, Number, (Number, Number) => Any) => Array[Array[Any]]
// Generates a 2D array of given height and width using a given generator function
function array2d(height, width, generator) {

    let output = Array.from(
        Array(height),
        () => Array.from(Array(width)));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            output[row][col] = generator.call(this, row, col);
        }
    }

    return output;
}



class World {

    constructor(height, width) {
        this.grid = array2d(height, width, () => "dead");
        this.width = width;
        this.height = height;
    }

    /* Given a row, column and color, returns the number of RED neighbors
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
                if (this.grid[neighborRow][neighborCol] == "red") {
                    count++;
                }
            }
        }

        if (this.grid[row][col] == "red"){
            count--;
        }
        
        return count;
    }

    // Returns a table of the number of red neighbors of each cell of a given color
    _countNeighbors() {
        return array2d.call(this, this.height, this.width, function(row, col) {
            return this._countNeighborsSingle.call(this, row, col)
        });
    }

    // Returns the next generation world state
    _getNextGen() {
        const countTable =  this._countNeighbors(color);
        return array2d.call(this, this.height, this.width, function(row, col) {
            if (countTable[row][col] == 3) {
                return color;
            } else if (countTable[row][col] != 2) {
                return "dead";
            } else {
                if (this.grid[row][col] == color) {
                    return color;
                } else {
                    return "dead";
                }
            }
        })
    }

    // Advances all red cells to the next generation. 
    advanceRed() {
        const countTable =  this._countNeighbors();
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (countTable[row][col] == 3) {
                    if (this.grid[row][col] == "blue") {
                        this.grid[row][col] = "dead";
                    } else {
                        this.grid[row][col] = "red";
                    }  
                } else if (countTable[row][col] != 2) {
                    if (this.grid[row][col] == "red") {
                        this.grid[row][col] = "dead";
                    }
                }
            }
        }
    }

    // Moves all blue cells up by one
    advanceBlue() {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (this.grid[row][col] == "blue") {
                    if (row == 0) {
                        this.grid[row][col] = "dead";
                    } else if (this.grid[row - 1][col] == "red") {
                        this.grid[row - 1][col] = "dead";
                        this.grid[row][col] = "dead";
                    } else {
                        this.grid[row - 1][col] = "blue";
                        this.grid[row][col] = "dead";
                    }
                }
            }
        }
    }
}