'use strict'

const EMPTY = '';
const MINE = '💣';
const FLAG = '🚩';

var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
}

var gGameInterval;
var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function init() {
    clearInterval(gGameInterval)

    gBoard = createMat(gLevel.SIZE)
    renderBoard(gBoard)
    changeLevel(gLevel.SIZE)
}


function createMat(SIZE) {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            var cell = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false

            }
            board[i][j] = cell
        }

    }
    console.log(board)
    return board
}

function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < gLevel.SIZE; i++) {
        strHtml += `<tr>\n`;
        for (var j = 0; j < gLevel.SIZE; j++) {
            var cell = board[i][j]
            var className = (cell) ? 'occupied' : '';
            strHtml += `<td class="${className}"${cell}
            onclick="cellClicked(${i},${j},this)"></td>`
        }
        strHtml += '</tr>\n'
    }
    // console.log(cell)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml
}

function cellClicked(i, j, elCell) {
    // var currLocation = {i , j};
    var cell = gBoard[i][j];
    console.log('cel:', cell)
    // if(cell){}
}

function changeLevel(Level) {

    switch (Level) {
        case 'Easy':
            gLevel.SIZE = 4;
            gLevel.MINES = 3;
            break;

        case 'normal':
            gLevel.SIZE = 5;
            gLevel.MINES = 7;
            break;

        case 'hard':
            gLevel.SIZE = 6;
            gLevel.MINES = 10;
            break;
    }
    // clearInterval(gGameInterval)
    init()

}

function timerOn() {
    var startTime = Date.now();
    gInterval = setInterval(renderTime, 1000, startTime);
}