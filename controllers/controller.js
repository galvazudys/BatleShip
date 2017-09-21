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
        this.logic.playGame(...cell,this.view,this.model);
    },
    

    
}