"use strict"

// TODO: I declare the relevant information regarding the logic game
const totalCells = 100;
const totalBombs = 20;
const totalScore = totalCells - totalBombs;
let score = 0;
const bombsList = [];

// TODO: I create 20 random bombs

/**
 * This function creates the random bombs
 * @returns {number[]}
 */

function createRandomBombs() {
    while (bombsList.length < totalBombs) {
        const bombCells = Math.floor(Math.random() * totalCells) + 1;
        // ! To avoid repeating twice the same cell number of a bomb
        if (!bombsList.includes(bombCells)) {
            bombsList.push(bombCells);
        }  
    }
    return bombsList;
}
createRandomBombs();
 //?console.log(`Le caselle delle bombe sono: ${bombsList}`);

// TODO: I create the cells of the grid
for(let i = 1; i<=100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    //? console.log(cell);
}



