
window.onload = function () {
    controller.getModel(gameBoardModel);
    controller.getView(views);
    controller.createBoard()
    controller.getLogic(logic);
}
var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    views.populateGameBoard(gameBoardModel.getCollection('gameState'));
}

