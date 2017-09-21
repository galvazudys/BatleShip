var logic = {
    playGame: function (col,row,score,totalhits, ships,shipData,gameState) {
        var state = {
            message:'',
            gameBoardState : '',
            totalHits:0,
            score:0
        }
        if (gameState[row][col] == null) {
            if (shipData[row][col] !== null) {
                state.message = 'Hit';
                for (var key in ships) {
                    if (key == shipData[row][col]) {
                        ships[key].hits--;
                        if (ships[key].hits == 0) {
                            state.message = 'You destroy my ' + ships[key].name
                        }
                    }
                }
                gameState[row][col] = 'X';
                state.gameBoardState = gameState;
                score += 5;
                totalhits -= 1;
            } else {
                state.message = 'Oh Boy,You really like WATER';
                gameState[row][col] = 'O';
                state.gameBoardState = gameState;                
                score -= 1;
            }
        } else {
            state.message= 'You tryed already this one...';
        }
        state.totalHits = totalhits;
        state.score = score;
        state.gameBoardState = gameState;
        this.hasGameEnded(totalhits);
        return state;

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




}


