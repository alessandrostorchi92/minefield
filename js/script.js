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
    
    const bombs = createRandomBombs(gameDifficulty);
    //? console.log(bombs); OK!

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
        cell.addEventListener("click", function () {
            this.classList.toggle('bg-cell-clicked')
        });
        grid.push(cell);
    }

    return grid;
}

// TODO: I print the minefield grid

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


// TODO: I create 20 random bombs

/**
 * This function which creates the random bombs
 * @param {number}  cellsBomb Bombs to put into the cells 
 * @returns {number[]}
 */

function createRandomBombs(cellsBomb) {
    const bombsList = [];
    const totalBombs = 20;

    while (bombsList.length < totalBombs) {
        const bombCells = Math.floor(Math.random() * cellsBomb) + 1;
        // ! To avoid repeating twice the same cell number of a bomb
        if (!bombsList.includes(bombCells)) {
            bombsList.push(bombCells);
        }
    }
    return bombsList;
}







