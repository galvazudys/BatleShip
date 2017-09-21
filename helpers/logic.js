var logic = {
    playGame: function (col,row,score,totalhits, view, model) {
        var ships = model.getCollection('schips');
        var shipData = model.getCollection('shipData');
        var gameState = model.getCollection('gameState');
        var message = model.getCollection('message.text');
        if (gameState[row][col] == null) {
            if (shipData[row][col] !== null) {
                message = 'Hit';
                view.displayMessage(message);
                for (var key in ships) {
                    if (key == shipData[row][col]) {
                        ships[key].hits--;
                        if (ships[key].hits == 0) {
                            message = 'You destroy my ' + ships[key].name
                        }
                    }
                }
                gameState[row][col] = 'X';
                model.updateGameState(gameState);
                view.populateGameBoard(model.getCollection('gameState'));
                score += 5;
                totalhits -= 1;
            } else {
                message = 'Oh Boy,You really like WATER';
                view.displayMessage(message);
                gameState[row][col] = 'O';
                model.updateGameState(gameState);
                view.populateGameBoard(model.getCollection('gameState'));
                score -= 1;
            }
        } else {
            message= 'You tryed already this one...';
            view.displayMessage(message);
        }
        view.updateHits(totalhits);
        view.updateScore(score);
        view.populateGameBoard(gameBoardModel.getCollection('gameState'));
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




}