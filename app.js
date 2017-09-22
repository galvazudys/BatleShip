
window.onload = function () {
    controller.getModel(gameBoardModel);
    controller.getView(views);
    controller.createBoard()
    controller.getLogic(logic);




    
}
var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    var data = database.ref('randomGames').on('value',(snapShot)=>{
        controller.setShipData(JSON.parse(snapShot.val()[Math.floor(Math.random()*5)]));   
        
    });
    views.populateGameBoard(gameBoardModel.getCollection('gameState'));
}

