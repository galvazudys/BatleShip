
window.onload = function () {
    views.createGameBoard();
}
var startButton = document.getElementById('startButton');
startButton.onclick = function () {
    views.populateGameBoard(gameBoardModel.gameState);
}

