"use strict"

/**
 * @type {HTMLSelectElement}
 */
// @ts-ignore
const gameDifficultyOptionSelect = document.querySelector("[name='playing-difficulty']");

/**
 * @type {HTMLButtonElement}
 */
// @ts-ignore
const startBtn = document.querySelector(".start-game-btn");

/**
 * @type {HTMLElement}
 */
// @ts-ignore
const gameGridContainer = document.querySelector('.minefield-container');



startBtn.addEventListener("click", onBtnClick);

function onBtnClick() {
    const gameDifficulty = parseInt(gameDifficultyOptionSelect.value)
    //? console.log("Chosen Option:", gameDifficulty); OK!

    const gridList = createGrid(gameDifficulty);
    //? console.log(gridList); OK!

    printGrid(gameGridContainer, gridList);


}

// TODO: I create the cells of the  virtual grid

/**
 * This function creates the cells of the virtual grid
 * @param {number} cellsNumber Number of the cells to create in the game grid
 * @returns {HTMLDivElement[]}
 */

function createGrid(cellsNumber) {
    const grid = [];

    for (let i = 1; i <= cellsNumber; i++) {
        const cell = document.createElement('div');
        const cellsPerRow = Math.sqrt(cellsNumber);
        cell.classList.add('cell');
        cell.innerText = i.toString();
        cell.style.flexBasis = `calc(100% / ${cellsPerRow})`;
        cell.addEventListener("click", function() {
            cell.classList.toggle('bg-cell')
        });
        grid.push(cell);
    }

    return grid;
}

/**
 * This function prints the grid game
 * @param {HTMLElement} container
 * @param {HTMLDivElement[]} cellsList
 */

function printGrid(container, cellsList) {

    container.innerHTML = "";

    for (let i = 0; i < cellsList.length; i++) {
        container.append(cellsList[i]);
    }

}





// // TODO: I declare the relevant information regarding the logic game
// const totalCells = 100;
// const totalBombs = 20;
// const totalScore = totalCells - totalBombs;
// let score = 0;
// const bombsList = [];

// // TODO: I create 20 random bombs

// /**
//  * This function creates the random bombs
//  * @param {number} totalBombs  Number of bombs to be placed in the grid squares
//  * @returns {number[]}
//  */

// function createRandomBombs(totalBombs) {
//     while (bombsList.length < totalBombs) {
//         const bombCells = Math.floor(Math.random() * totalCells) + 1;
//         // ! To avoid repeating twice the same cell number of a bomb
//         if (!bombsList.includes(bombCells)) {
//             bombsList.push(bombCells);
//         }  
//     }
//     return bombsList;
// }

// //* I invoke the function to generate the boxes in which the bombs will be placed
// createRandomBombs(totalBombs);
// //?console.log(`Le caselle delle bombe sono: ${bombsList}`);





