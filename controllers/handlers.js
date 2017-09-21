var handlers ={
    play:function(cell){
        var col = cell.getAttribute('col');
        var row = cell.parentElement.getAttribute('row');
        var score = Number(document.getElementById('score').innerHTML);
        var totalhits = Number(document.getElementById('hits').innerHTML);
        controller.play(col,row,score,totalhits);
    }
}