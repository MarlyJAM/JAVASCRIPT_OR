window.onload=function () {


    var mycircle =  document.getElementById("cercle");

    if (!mycircle) {
        alert('Impossible de récupérer le text');

    
    }

    var context= mycircle.getContext('2d');

    if (!context) {
        alert('Impossible de récupérer le context');

   
}

context.fillStyle="#cceeff";
window.addEventListener("mousemove",function (event) {
    context.clearRect(0,0,cercle.width,cercle.height);
    context.beginPath();
    context.arc(event.clientX, event.clientY , 25, 0 , Math.PI*2, true);
    context.fill();
    context.closePath();
});
window.addEventListener("click",function (event) {
    switch (context.fillStyle) {
        case "#ffff00": {context.fillStyle="#00ff00";break;}
        case "#cceeff": {context.fillStyle="#ffff00";break;}
        case "#00ff00": {context.fillStyle="#cceeff";break;} 
       
    }
    context.clearRect(0,0,cercle.width,cercle.height);
    context.beginPath();
    context.arc(event.clientX, event.clientY , 25, 0 , Math.PI*2, true);
    context.fill();
    context.closePath();
});





}
