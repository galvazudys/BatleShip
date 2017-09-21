var views = {
    createGameBoard:function (shipData) {
        var gameBoard = document.getElementById('gameBoard');
        for (var i = 0; i < 10; i++) {
            var tableRow = document.createElement('tr');
            tableRow.setAttribute('row', i);
            for (var j = 0; j < 10; j++) {
                var tableData = document.createElement('td');
                tableData.setAttribute('col', j);
                tableData.setAttribute('onclick', 'handlers.play(this)');
                tableData.innerHTML = shipData[i][j];
                tableRow.appendChild(tableData);
            }
            gameBoard.appendChild(tableRow);
        }
    },
    
    populateGameBoard:function (gameState) {
        var gameBoard = document.getElementById('gameBoard');
        for (var i = 0; i < gameState.length; i++) {
            var row = gameBoard.children[i];
            for (var j = 0; j < gameState[i].length; j++) {
                var col = row.children[j];
                col.innerHTML = gameState[i][j]
            }
        }
    },
    updateScore:function(score){
        document.getElementById('score').innerHTML = score;
    },
    updateHits:function(hits){
        document.getElementById('hits').innerHTML = hits;
        
    },
    displayMessage:function(message){
        document.getElementById('message').innerHTML = message;
        setTimeout(function(){
            document.getElementById('message').innerHTML = 'Make move';
        },3000);
    }
    
}