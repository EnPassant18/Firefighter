class Renderer {

    constructor(context, cellSize, width, height) {
        this.context = context;
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
        this.context.fillStyle = "white";
        this.context.textAlign = "center";
        this.context.font = "bold 35px Courier";
        this.context.fillText("Press enter to start", 300, 300);
    }

    flash() {
        this.context.fillStyle = "lightblue";
        this.context.fillRect(
            this.cellSize, this.cellSize, 
            (this.width - 2) * this.cellSize, (this.height - 2) * this.cellSize);
        setTimeout(() => {
            this.context.fillStyle = "black";
            this.context.fillRect(
                this.cellSize, this.cellSize, 
                (this.width - 2) * this.cellSize, (this.height - 2) * this.cellSize);
        }, 10)    
    }

    // Clears the game board
    clear() {
        this.context.fillStyle = "black";
        this.context.fillRect(
            this.cellSize, this.cellSize, 
            (this.width - 2) * this.cellSize, (this.height - 2) * this.cellSize);
    }

    // Updates the rendering to match the given world state
    update(grid) {
        this.clear();
        this.context.fillStyle = "red";
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (grid[row][col]) {
                    this.context.fillRect(
                        col*this.cellSize, row*this.cellSize, 
                        this.cellSize, this.cellSize);
                }
            }
        }
    }

    clearPads() {
        this.context.fillStyle = "black";
        // top
        this.context.fillRect(0, 0, this.width * this.cellSize, this.cellSize)
        // left
        this.context.fillRect(0, 0, this.cellSize, this.height * this.cellSize);
        // bottom
        this.context.fillRect(
            0, (this.height - 1) * this.cellSize, 
            this.width * this.cellSize, this.cellSize);
        // right
        this.context.fillRect(
            (this.width - 1) * this.cellSize, 0,
            this.cellSize, this.height * this.cellSize);
    }

    drawPads(position, size, isPowerActive = false) {
        this.clearPads();
        this.context.fillStyle = isPowerActive ? "lightblue" : "lightgreen";
        // top
        this.context.fillRect(
            (this.width - position - size) * this.cellSize, 0, 
            size * this.cellSize, this.cellSize);
        // left
        this.context.fillRect(
            0, position * this.cellSize, 
            this.cellSize, size * this.cellSize);
        // bottom
        this.context.fillRect(
            position * this.cellSize, (this.height - 1) * this.cellSize,
            size * this.cellSize, this.cellSize);
        // right
        this.context.fillRect(
            (this.width - 1) * this.cellSize, (this.height - position - size) * this.cellSize, 
            this.cellSize, size * this.cellSize);
    }

    gameOver(score) {
        this.clear();
        this.clearPads();
        this.context.fillStyle = "white";
        this.context.font = "bold 50px Courier";
        this.context.fillText("Game Over", 300, 260);
        this.context.font = "bold 30px Courier";
        this.context.fillText("Your score was " + score, 300, 330);
        this.context.fillText("Press enter to play again", 300, 370);
    }
}