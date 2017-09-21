
window.onload = function () {
    controller.getModel(gameBoardModel);
    controller.getView(views);
    controller.createBoard()
    
}
var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    views.populateGameBoard(gameBoardModel.getCollection('gameState'));
}

