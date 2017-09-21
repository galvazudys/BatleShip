
window.onload = function () {
    controller.getModel(gameBoardModel);
    controller.getView(views);
    views.createGameBoard(controller.getShipData());
}
var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    views.populateGameBoard(gameBoardModel.getCollection('gameState'));
}

