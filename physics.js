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

    /* Given a row, column and color, returns the number of living neighbors
    of the cell in that position and of that color. */
    _countNeighborsSingle(row, col, color) {
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
                if (this.grid[neighborRow][neighborCol] == color) {
                    count++;
                }
            }
        }

        if (this.grid[row][col] == color){
            count--;
        }
        
        return count;
    }

    // Returns a table of the number of living neighbors of each cell of a given color
    _countNeighbors(color) {
        return array2d.call(this, this.height, this.width, function(row, col) {
            return this._countNeighborsSingle.call(this, row, col, color)
        });
    }

    // Returns the next generation world state of either color
    // All cells of the other color are marked "dead"
    _getNextGen(color) {
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

    // Advances the world to the next generation. 
    advance() {
        const redTable = this._getNextGen("red");
        console.log(redTable[0][0])
        const blueTable = this._getNextGen("blue");
        console.log(blueTable[0][0])
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (redTable[row][col] == "red") {
                    if (blueTable[row][col] == "blue") {
                        this.grid[row][col] = "dead";
                    } else {
                        this.grid[row][col] = "red";
                    }  
                } else {
                    if (blueTable[row][col] == "blue") {
                        this.grid[row][col] = "blue";
                    } else {
                        this.grid[row][col] = "dead";
                    }
                }
            }
        }
        console.log(this.grid[0][0])
    }
}