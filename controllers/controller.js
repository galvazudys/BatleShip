var controller = {
    play:function(cell) {
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
        views.populateGameBoard(gameBoardModel.gameState);
        this.hasGameEnded(totalhits);
    },
    
    hasGameEnded:function(hits){
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
    // call to model
    // call to view
    
}