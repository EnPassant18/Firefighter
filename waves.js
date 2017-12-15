let waves = Array(15);
let waveNames = Array(15);

waveNames[0] = "Still Lifes"
waves[0] = function() {
    tub.spawn(10, 18);
    hive.spawn(10, 37);
    block.spawn(11, 58);
    stillShip.spawn(20, 18);
    boat.spawn(20, 58);
    loaf.spawn(20, 37);
}

waveNames[1] = "Oscillators"
waves[1] = function() {
    beacon.spawn(10, 8);
    toad.spawn(11, 28);
    toad.spawn(11, 48, true);
    beacon.spawn(10, 68, true);
    clock.spawn(20, 8);
    blinker.spawn(21, 28);
    blinker.spawn(21, 49, true);
    clock.spawn(20, 68, true);
}

waveNames[2] = "Gliders"
waves[2] = function() {
    glider.spawn(22, 33, true);
    glider.spawn(22, 42);
}

waveNames[3] = "Ships"
waves[3] = function() {
    lightShip.spawn(0, 27);
    lightShip.spawn(0, 47);
}

waveNames[4] = "Great! Bigger Ships"
waves[4] = function() {
    midShip.spawn(0, 27);
    heavyShip.spawn(0, 47);
}

waveNames[5] = "What the Heck Is That?"
waves[5] = function() {
    pentadecathlon.spawn(20, 14);
    pentadecathlon.spawn(20, 54);
}

waveNames[6] = "The Red Danube Waltz"
waves[6] = function() {
    glider.spawn(8, 38);
    glider.spawn(16, 38, true);
    glider.spawn(24, 38);
    glider.spawn(32, 38, true);
    glider.spawn(40, 38);
    glider.spawn(48, 38, true);
}

waveNames[7] = "Think Quick!"
waves[7] = function() {
    midShip.spawn(25, 17);
    midShip.spawn(25, 59, true);
}

waveNames[8] = "Act Quicker!"
waves[8] = function() {
    heavyShip.spawn(20, 10);
    heavyShip.spawn(20, 66, true);
}

waveNames[9] = "Methuselahs"
waves[9] = function() {
    rPentomino.spawn(25, 18);
    rPentomino.spawn(25, 58);
}

waveNames[10] = "Infernal Hellfire of Pure Evil"
waves[10] = function() {
    acorn.spawn(30, 17);
    acorn.spawn(30, 57);
}

waveNames[11] = "U Have Got to be Kidding Me"
waves[11] = function() {
    piHeptomino.spawn(20, 18);
    piHeptomino.spawn(35, 18);
    piHeptomino.spawn(20, 38);
    piHeptomino.spawn(35, 38);
    piHeptomino.spawn(20, 58);
    piHeptomino.spawn(35, 58);
}

waveNames[12] = "Glider Guns: Deadly Beauty"
waves[12] = function() {
    gosperGun.spawn(0, 1);
    gosperGun.spawn(13, 43, true);
    gosperGun.spawn(26, 1);
    gosperGun.spawn(39, 43, true);
}

waveNames[13] = "..."
waves[13] = function() {
    cowHead.spawn(14, 11);
    cowHead.spawn(14, 64);
    for (let row of [10, 19, 23, 27, 31, 35, 39, 43, 47]) {
        for (let col of [10, 15, 63, 68]) {
            block.spawn(row, col);
        }
    }
    for (let row = 19; row <= 49; row++) {
        for (let col of [13, 66]) {
            world.grid[row][col] = "red";
        }
    }
    preBlock.spawn(50, 13, false, true);
    preBlock.spawn(51, 11, false, true);
    preBlock.spawn(52, 14, true, true);
    preBlock.spawn(50, 66, false, true);
    preBlock.spawn(51, 64, false, true);
    preBlock.spawn(52, 67, true, true);
}

waveNames[14] = "Mission: Possibly Impossible"
waves[14] = function() {
    acorn.spawn(30, 28);
    acorn.spawn(30, 48);
    lightShip.spawn(0, 12);
    lightShip.spawn(0, 63);
    tub.spawn(46, 14);
    tub.spawn(48, 12);
    tub.spawn(50, 10);
    tub.spawn(52, 8);
    tub.spawn(54, 6);
    tub.spawn(56, 4);
    tub.spawn(46, 63);
    tub.spawn(48, 65);
    tub.spawn(50, 67);
    tub.spawn(52, 69);
    tub.spawn(54, 71);
    tub.spawn(56, 73);
}

waveNames[15] = "Zombie Picasso's Revenge"
waves[15] = function() {
    acorn.spawn(30, 38);
    acorn.spawn(15, 74);
    rPentomino.spawn(42, 25);
    rPentomino.spawn(37, 17);
    rPentomino.spawn(15, 36);
    rPentomino.spawn(37, 57);
    pentadecathlon.spawn(10, 10);
    block.spawn(50, 44);
    block.spawn(13, 42);
    tub.spawn(21, 1);
    boat.spawn(43, 22);
    hive.spawn(31, 70);
    hive.spawn(53, 70);
    loaf.spawn(35, 53, true);
    loaf.spawn(3, 43);
    bigBarge.spawn(47, 56);
    pond.spawn(3, 31);
    pond.spawn(33, 31);
    blinker.spawn(36, 15);
    blinker.spawn(2, 76);
    toad.spawn(24, 60);
    beacon.spawn(49, 36, true);
    clock.spawn(46, 75);
    glider.spawn(5, 65, true);
    lightShip.spawn(40, 3);
    midShip.spawn(10, 45);
    heavyShip.spawn(18, 21);   
}