var logic = {
    playGame: function (col,row,score,totalhits, view, model,gameCondition) {
        var ships = model.getCollection('schips');
        var shipData = model.getCollection('shipData');
        var gameState = model.getCollection('gameState');
        if (gameState[row][col] == null) {
            if (shipData[row][col] !== null) {
                alert('Hit!');
                for (var key in ships) {
                    if (key == shipData[row][col]) {
                        ships[key].hits--;
                        if (ships[key].hits == 0) {
                            alert('you sunk my: ' + ships[key].name);
                        }
                    }
                }
                gameState[row][col] = 'X';
                model.updateGameState(gameState);
                view.populateGameBoard(model.getCollection('gameState'));
                score += 5;
                totalhits -= 1;
            } else {
                alert('You Hit Water!');
                gameState[row][col] = 'O';
                model.updateGameState(gameState);
                view.populateGameBoard(model.getCollection('gameState'));
                score -= 1;
            }
        } else {
            alert('you tryed already this one');
        }
        view.updateHits(totalhits);
        view.updateScore(score);
        view.populateGameBoard(gameBoardModel.getCollection('gameState'));
        gameCondition(totalhits);

    },




}