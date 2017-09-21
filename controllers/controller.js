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

    createBoard:function(){
        this.view.createGameBoard(this.model.getCollection('shipData'));
    },

    play:function(...cell) {
        this.logic.playGame(...cell,this.view,this.model,this.hasGameEnded);
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