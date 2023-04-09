window.onload=function () {
    var mycircle =  document.getElementById("cercle");

    if (!mycircle) {
        alert('Impossible de récupérer le text');
    }
    var context= mycircle.getContext('2d');

    if (!context) {
        alert('Impossible de récupérer le context');
}
var etat= 1;
var yPos=100;
var xPos=100;
context.clearRect(0,0,cercle.width,cercle.height);
context.beginPath();
context.arc(yPos, xPos , 25, 0 , Math.PI*2, true);
context.fillStyle='#ffff00';
context.fill();
context.closePath();
window.addEventListener("keydown",function (event) {
    switch(event.keyCode)
		{
			case 13: {
				if (etat==1) 
					etat=0;
				else
					etat=1;
				break;
			}
			case 37: {
				if(xPos>0)
					xPos-=10;
				break;
			}
			case 39: {
				if(xPos<=cercle.width)
					xPos+=10;
				break;
			}
            case 40: {
				if(yPos<=cercle.height)
					yPos+=10;
				break;
			}
			case 38: {
				if(yPos>0)
					yPos-=10;
				break;
			}
            case 74: {context.fillStyle='#ffff00';break;}
            case 86 : {context.fillStyle='#00ff00';break;}
            case 66: {context.fillStyle='#cceeff';break;}	
		}
    context.clearRect(0,0,cercle.width,cercle.height);
    if (etat==1) {
        context.beginPath();
        context.arc(xPos, yPos , 25, 0 , Math.PI*2, true);
        context.fill();
        context.closePath();
       } else {
        context.clearRect(0,0,cercle.width,cercle.height);
        context.fillRect(xPos-25, yPos-25,50,50);
     }
});
}