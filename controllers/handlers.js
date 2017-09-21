var handlers ={
    play:function(cell){
        var col = cell.getAttribute('col');
        var row = cell.parentElement.getAttribute('row');
        var score = Number(document.getElementById('score').innerHTML);
        var totalhits = Number(document.getElementById('hits').innerHTML);
        var arr =[col,row,score,totalhits];
        controller.play(...arr);
    }
}