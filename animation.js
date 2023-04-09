window.onload=function () {


var canva = document.getElementById('canva');
var context = canva.getContext("2d") ;
var myInterval= setInterval(animate,1000);
var xPos=100;
var yPos=100;

var sens = 1;

function animate() {

    if (yPos>=canva.heigth-50) {
        sens=-1;
    }
    if (yPos<=0) {
        sens=1;
    }
    yPos+= sens*10;
    context.clearRect(0,0,canva.width,canva.heigth);
    context.fillRect(xPos,yPos,50,50);
}
 alert(myInterval);

}



























































