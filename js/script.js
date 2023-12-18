"use strict"

/* -------------------------------------------------------

PREPARATION SESSION: Collection of the Html elements and global variables I need

-------------------------------------------------------- */

/**
 * @type {HTMLSelectElement}
 */
// @ts-ignore
const gameLevelSelect = document.querySelector("[name='playing-level-difficulty']");

/**
 * @type {HTMLButtonElement}
 */
// @ts-ignore
const playBtn = document.querySelector(".start-game-btn");

/**
 * @type {HTMLElement}
 */
// @ts-ignore
const gridContainer = document.querySelector('.minefield-container');

/**
 * @type {HTMLDivElement}
 */
// @ts-ignore
const scoreCounter = document.querySelector('.counter-score');

/**
 * @type {number}
 */
let score = 0;

/**
 * @type {number}
 */
const totalBombs = 20;

/**
 * @type {number[]}
 */
const bombsList = [];

/* ----------

GAME SESSION: Implementaion of the minefield game

----------- */

playBtn.addEventListener("click", onBtnClick);

function onBtnClick() {

    const playingLevel = parseInt(gameLevelSelect.value)

    //* Invocation of the function which generates a virtual minefield grid
    const gridBoxes = createGrid(playingLevel);

    //* Invocation of the function which prints the virtual minefield grid 
    printGrid(gridContainer, gridBoxes);
   
}


// TODO: Generation of the cells of the virtual grid

/**
 * This function creates the cells of the virtual grid and assigns the bombs to the virtual cell
 * @param {number} cellsNumber Number of the cells to create in the game grid
 * @returns {HTMLDivElement[]}
 */

function createGrid(cellsNumber) {
    const grid = [];
    const maxScore = cellsNumber - totalBombs;
    let isCellEven = false;
    let isRowEven = false;
    const arrayBombs = createRandomBombs(parseInt(gameLevelSelect.value));
    console.log(arrayBombs);

    for (let i = 1; i <= cellsNumber; i++) {
        const cell = document.createElement('div');
        const cellsPerRow = Math.sqrt(cellsNumber);
        cell.classList.add('cell');
        cell.style.flexBasis = `calc(100% / ${cellsPerRow})`;
        cell.dataset.cellValue = i.toString();
        
        let isBomb = arrayBombs.includes(i);

        cell.addEventListener("click", function() {
            console.log('cell clicked', i)

            if(cell.classList.contains('bg-cell-empty')) {
                return
            }

            if (isBomb === true){
                this.innerHTML = "<i class='fa-solid fa-bomb'></i>"
                cell.classList.add('bg-cell-bomb');
                showAllBombs();
                lostGame();
        
            } else {
                cell.classList.add('bg-cell-empty');
                updateScore();
            }

            if (score === maxScore) {
                wonGame();
            }

        });

        isCellEven = i % 2 === 0;
        if (isRowEven && isCellEven) {
            cell.classList.add('coloured-cell')
        } else if (!isRowEven && !isCellEven) {
            cell.classList.add('coloured-cell')
        }
        if (i % cellsPerRow === 0) {
            isRowEven = !isRowEven
        }

        grid.push(cell);
    }

    return grid;
}

// TODO: Printing of the minefield grid

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

// TODO: Creation of 20 random bombs

/**
 * This function creates the random bombs
 * @param {number} cellsBomb Bombs to put into the cells 
 * @returns {number[]} 
 */

function createRandomBombs(cellsBomb) {

    while (bombsList.length < totalBombs) {
        const bombCells = Math.floor(Math.random() * cellsBomb) + 1;
        // ! To avoid repeating twice the same cell number of a bomb
        if (!bombsList.includes(bombCells)) {
            bombsList.push(bombCells);
        }
    }
    return bombsList;

}

// TODO: Setting what happens if the player loses the minefield game

/**
 * This function shows up the game over message 
 */
function lostGame() {
    setTimeout(function() {
        alert("You stepped on a bomb! Game Over.");
        location.reload();
    }, 1000);
}

// TODO: Update the score of the minefield game

/**
 * This function updates the game score
 */
function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart(3,0);
}

// TODO: Setting what happens if the player wins the minefield game

/**
 * This function shows up the message you won the game
 */
function wonGame() {
    setTimeout(function() {
        alert("You won. Congratulations");
        location.reload();
    }, 1000);
}

// TODO: Reveletion of the bombs location

/**
 * This function shows where are placed all the remaining bombs
 */
function showAllBombs() {
    const totalCells = document.querySelectorAll('.cell');
    for (let i = 1; i <= totalCells.length; i++ ) {
        if (bombsList.includes(i)) {
            const cellToShow = totalCells[i - 1];
            cellToShow.innerHTML = "<i class='fa-solid fa-bomb'></i>";
        }
    }
}






















