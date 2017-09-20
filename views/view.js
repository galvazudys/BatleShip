var views = {
    createGameBoard:function () {
        var gameBoard = document.getElementById('gameBoard');
        for (var i = 0; i < 10; i++) {
            var tableRow = document.createElement('tr');
            tableRow.setAttribute('row', i);
            for (var j = 0; j < 10; j++) {
                var tableData = document.createElement('td');
                tableData.setAttribute('col', j);
                tableData.setAttribute('onclick', 'controller.play(this)');
                tableData.innerHTML = gameBoardModel.shipData[i][j];
                tableRow.appendChild(tableData);
            }
            gameBoard.appendChild(tableRow);
        }
    },
    
    populateGameBoard:function (gameState) {
        var gameBoard = document.getElementById('gameBoard');
        for (var i = 0; i < gameBoardModel.gameState.length; i++) {
            var row = gameBoard.children[i];
            for (var j = 0; j < gameBoardModel.gameState[i].length; j++) {
                var col = row.children[j];
                col.innerHTML = gameBoardModel.gameState[i][j]
            }
        }
    }
    
}