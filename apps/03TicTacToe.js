'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X';
//after one turn is taking it should switch to "0"

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    //Your code here
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn ||
        board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn ||
        board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true;


    }
}

function verticalWin() {
    //Your code here
    if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
        board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
        board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
        return true;

    }
}

function diagonalWin() {
    //Your code here
    if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn ||
        board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
        return true;

    }
}

function checkForWin() {
    if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true){
        console.log('Player ' + playerTurn + ' Won!');
        return true;
      }
}

function ticTacToe(row, column) {
    // Your code here that puts the x or o in the array
    // checks if there is a winner
    // changes whose turn it is
    //if(!row || !column || !board[row][column]){
    //  console.log("use valid input please!");
    //} else if (board[row][column] === ' '){
    //  board[row][column] = playerTurn;
    //  checkForTie();
    //  checkForWin();
    //}
    board[row][column] = playerTurn;
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            ticTacToe(row, column);
            getPrompt();
        });
    });

}



// Tests

if (typeof describe === 'function') {

    describe('#ticTacToe()', function() {
        it('should place mark on the board', function() {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', function() {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', function() {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function() {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function() {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function() {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
