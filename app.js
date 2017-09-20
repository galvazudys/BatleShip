var shipData = [
    [null, null, null, null, null, null, null, null, null, null],
    ['S', null, null, null, null, null, null, null, 'D', null],
    ['S', null, 'C', 'C', 'C', 'C', 'C', null, 'D', null],
    ['S', null, null, null, null, null, null, null, 'D', null],
    [null, null, 'P', null, null, null, null, null, null, null],
    [null, null, 'P', null, null, null, null, null, null, null],
    ['B', null, null, null, null, null, null, null, null, null],
    ['B', null, null, null, null, null, null, null, null, null],
    ['B', null, null, null, null, null, null, null, null, null],
    ['B', null, null, null, null, null, null, null, null, null]
];


var gameState = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
];


var schips = {
    C: {
        name: "Carrier",
        hits: 5
    },
    B: {
      name: "Battleship",
      hits: 3
    },
    S: {
      name: "Submarine",
      hits: 3
    },
    D: {
      name: "Destroyer",
      hits: 4
    },
    P: {
        name: "Patrol Boat",
      hits: 2
    }
  };

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
            tableData.innerHTML = shipData[i][j];
            tableRow.appendChild(tableData);
        }
        gameBoard.appendChild(tableRow);
    }
}

function populateGameBoard(gameState) {
    var gameBoard = document.getElementById('gameBoard');
    for (var i = 0; i < gameState.length; i++) {
        var row = gameBoard.children[i];
        console.log(row);
        for (var j = 0; j < gameState[i].length; j++) {
            var col = row.children[j];
            console.log(col);
            col.innerHTML = gameState[i][j]
        }
    }
}

function play(cell) {
    var col = cell.getAttribute('col');
    var row = cell.parentElement.getAttribute('row');
    var score = Number(document.getElementById('score').innerHTML);
    var hits = Number(document.getElementById('hits').innerHTML);
    if (gameState[row][col] == null) {
        if (shipData[row][col] == 'X') {
            alert('Hit!');
            gameState[row][col] = 'X';
            score += 5;
            hits -= 1;
        } else {
            alert('You Hit Water!');
            gameState[row][col] = 'O';
            score -= 1;
        }
    } else {
        alert('you tryed already this one');
    }
    document.getElementById('hits').innerHTML = hits;
    document.getElementById('score').innerHTML = score;
    populateGameBoard(gameState);
    hasGameEnded(hits);
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
    populateGameBoard(gameState);
}