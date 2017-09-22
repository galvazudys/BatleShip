var controller = {
    model:{},
    view:{},
    logic:{},
    getLogic:function(logic){
        return this.logic = logic;
    },
    getView:function(view){
        return this.view = view;
    },
    getModel:function(model){
        return this.model = model;
    },
    setShipData:function(ships){
        this.model.setShips(ships);
    },

    createBoard:function(){
        this.view.createGameBoard(this.model.getCollection('shipData'));
    },

    play:function(...cell) {
        var ships = this.model.getCollection('schips');
        var shipData = this.model.getCollection('shipData');
        var gameState = this.model.getCollection('gameState');    
        var game_played = this.logic.playGame(...cell,ships,shipData,gameState);
        //calls to update data
        this.view.displayMessage(game_played.message);
        this.model.updateGameState(game_played.gameBoardState);
        this.view.populateGameBoard(game_played.gameBoardState);
        this.view.updateHits(game_played.totalHits);
        this.view.updateScore(game_played.score);
    },
    

    
}