window.onload= function my_canvas () {

    var canva =  document.getElementById("canva");

    if (!canva) {
        alert('Impossible de récupérer le text');
    }

    var canvas= canva.getContext('2d');
    /**
     * Je fais le triangle
     */
    canvas.beginPath();
    canvas.moveTo(0,250);
    canvas.lineTo(125,0);
    canvas.lineTo(250,250);
    canvas.lineTo(0,250);
    canvas.strokeStyle='purple';
    canvas.stroke();

    canvas.closePath();


    /**
     * Je fais le carre
     */
    canvas.strokeStyle='red';

    canvas.strokeRect(100,125,50,50);


    /**
     * Je fais le cercle
     */

     canvas.beginPath();
     
     canvas.fillStyle='#31F19D';

     canvas.arc(125,150,25,0,Math.PI*2, true);
 
     canvas.fill();

     canvas.closePath();



    
}