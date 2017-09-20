

// Carrier - 5hits
// battleship - 4
// destroyer - 3
// submarine - 3
// patrol boat - 2



function createGameBoard() {
    var gameBoard = document.getElementById('gameBoard');
    for (var i = 0; i < 10; i++) {
        var tableRow = document.createElement('tr');
        tableRow.setAttribute('row', i);
        for (var j = 0; j < 10; j++) {
            var tableData = document.createElement('td');
            tableData.setAttribute('col', j);
            tableData.setAttribute('onclick', 'play(this)');
            tableData.innerHTML = gameBoardModel.shipData[i][j];
            tableRow.appendChild(tableData);
        }
        gameBoard.appendChild(tableRow);
    }
}

function populateGameBoard(gameState) {
    var gameBoard = document.getElementById('gameBoard');
    for (var i = 0; i < gameBoardModel.gameState.length; i++) {
        var row = gameBoard.children[i];
        for (var j = 0; j < gameBoardModel.gameState[i].length; j++) {
            var col = row.children[j];
            col.innerHTML = gameBoardModel.gameState[i][j]
        }
    }
}

function play(cell) {
    var col = cell.getAttribute('col');
    var row = cell.parentElement.getAttribute('row');
    var score = Number(document.getElementById('score').innerHTML);
    var totalhits = Number(document.getElementById('hits').innerHTML);
    if (gameBoardModel.gameState[row][col] == null) {   
        if (gameBoardModel.shipData[row][col] !== null) {
            alert('Hit!');
            for(var key in gameBoardModel.schips){
                if(key == gameBoardModel.shipData[row][col]){
                    gameBoardModel.schips[key].hits--;
                    if(gameBoardModel.schips[key].hits==0){
                        alert('you sunk my: ' + gameBoardModel.schips[key].name);
                    }
                }
            }
            gameBoardModel.gameState[row][col] = 'X';
            score += 5;
            totalhits -= 1;
        } else {
            alert('You Hit Water!');
            gameBoardModel.gameState[row][col] = 'O';
            score -= 1;
        }
    } else {
        alert('you tryed already this one');
    }
    document.getElementById('hits').innerHTML = totalhits;
    document.getElementById('score').innerHTML = score;
    populateGameBoard(gameBoardModel.gameState);
    hasGameEnded(totalhits);
}

function hasGameEnded(hits){
    if (hits === 0){
        alert("You won the game");
       var tds = document.getElementsByTagName("td");
       for (var i = 0; i < tds.length; i++){
           tds[i].onclick = function(){
                alert("The game has finished!"); 
           }
       }
   }
}


window.onload = function () {
    createGameBoard();
}


var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    populateGameBoard(gameBoardModel.gameState);
}