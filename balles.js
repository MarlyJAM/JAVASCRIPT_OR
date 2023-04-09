function MyCircles(X,Y,color,vitesse) {
    this.X=X;
    this.Y=Y;
    this.color=color;
    this.vitesse=vitesse
    this.sens=1;
    
}


window.onload=function () {

    var canva = document.getElementById('canva');
    var context = canva.getContext("2d") ;

    var temps= Math.round(Math.random()*((200-100))+100);
    var xPos= Math.round(Math.random()*((400-100))+100);

    var tableY= new Array(100,200,300,450,0,50,500);

    var colors= new Array('#ffff00','#00ff00','#cceeff', "#ff0000", "#0000ff","#8033FF","#FF33D1","#FF8A33 ")
    var circles=new Array();

    var myInterval=setInterval(anime,temps);

    for(var yPos in tableY)
	{
        var vitesse=5+Math.random()*10;
        var color=Math.round(Math.random()*(colors.length- 1));
        circles[circles.length]=new MyCircles(xPos,tableY[yPos],color,vitesse);
	}

    function anime() {

        context.clearRect(0, 0, canva.width, canva.height);

        for (var yPos in circles) {

                if (circles[yPos].Y<=0 ) {
                    circles[yPos].sens=1;
                    circles[yPos].color=Math.round(Math.random()*(colors.length- 1));
                    
                } else if(circles[yPos].Y>=canva.height-50  ) {
                    circles[yPos].sens=-1;
                    circles[yPos].color=Math.round(Math.random()*(colors.length- 1));
                }
    
                circles[yPos].Y+=circles[yPos].sens*circles[yPos].vitesse;
                context.fillStyle=colors[circles[yPos].color];
                context.beginPath();
                context.arc(  circles[yPos].X,  circles[yPos].Y,25,0,Math.PI*2,true);
                context.fill();
                context.closePath();
                
                
            
        }
      
    }

   
   
}
