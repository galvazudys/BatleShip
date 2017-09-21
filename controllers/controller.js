var controller = {
    model:{},
    view:{},
    getView:function(view){
        return this.view = view;
    },
    getModel:function(model){
        return this.model = model;
    },
    getShipData:function(){
        return this.model.getCollection('shipData');
    },
    updateBoardState:function(state){
        gameBoardModel.updateGameState(state); 
    },
    createBoard:function(){
        views.createGameBoard(this.getShipData());
    },

    play:function(col,row,score,totalhits) {
        var ships = this.model.getCollection('schips');
        var shipData = this.model.getCollection('shipData');
        var gameState =this.model.getCollection('gameState'); 
        if (gameState[row][col] == null) {   
            if (shipData[row][col] !== null) {
                alert('Hit!');
                for(var key in ships){
                    if(key == shipData[row][col]){
                        ships[key].hits--;
                        if(ships[key].hits==0){
                            alert('you sunk my: ' + ships[key].name);
                        }
                    }
                }
                gameState[row][col] = 'X';
                this.updateBoardState(gameState);
                views.populateGameBoard(gameBoardModel.getCollection('gameState'));
                score += 5;
                totalhits -= 1;
            } else {
                alert('You Hit Water!');
                gameState[row][col] = 'O';
                this.updateBoardState(gameState);
                views.populateGameBoard(gameBoardModel.getCollection('gameState'));
                score -= 1;
            }
        } else {
            alert('you tryed already this one');
        }
        views.updateHits(totalhits);
        views.updateScore(score);
        views.populateGameBoard(gameBoardModel.getCollection('gameState'));
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