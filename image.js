function MyCircles(Y,sprite,vitesse) {
    this.X=0;
    this.Y=Y;
    this.sprite=sprite;
    this.vitesse=vitesse
    this.sens=1;
    
}

var blue = getElementById("bleue");
var red = getElementById("rouge");
var green = getElementById("vert");
window.onload=function () {

    var canva = document.getElementById('canva');
    if (!canva) {
        alert("Impossible de récuperer le canvas")
      }
    var context = canva.getContext("2d") ;
    
    if (!context) {
        alert("Impossible de récuperer le contexte du canvas")
        }

    var temps= Math.round(Math.random()*((200-50))+50);
    var tableY= new Array(100,200,250,0,300);
    var sprites= new Array(red,blue,green);
    var circles=new Array();

    for(var yPos in tableY)
	{
        var vitesse=5+Math.random()*10;
        var color=Math.round(Math.random()*(sprites.length- 1));
        circles[circles.length]=new MyCircles(tableY[yPos],sprites[color],vitesse);
	}

    var myInterval=setInterval(anime,temps);
    function anime() {

        context.clearRect(0, 0, canva.width, canva.height);

        for (var yPos in circles) {

                if (circles[yPos].Y<=0 ) {
                    circles[yPos].sens=1;
                    var j = Math.round(Math.random()*(sprites.length- 1));
                    circles[yPos].sprite= sprites[j];
                    
                } else if(circles[yPos].Y>=canva.height-50  ) {
                    circles[yPos].sens=-1;
                    var j = Math.round(Math.random()*(sprites.length- 1));
                    circles[yPos].sprite = sprites[j];
                }
    
                circles[yPos].Y+=circles[yPos].sens*circles[yPos].vitesse;

                context.drawImage(circles[yPos].sprite, 0, 0, 32, 31,circles[yPos].X, circles[yPos].Y, 32,31);
                
            
        }
      
    }

   
   
}
