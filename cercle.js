window.onload= function my_circle () {

    var mon_cercle =  document.getElementById("mon_cercle");

    if (!mon_cercle) {
        alert('Impossible de récupérer le text');
    }

    var cercle= mon_cercle.getContext('2d');

    cercle.beginPath();

    cercle.arc(75, 75 , 75, 0 , Math.PI*2, true);

    cercle.fill();

    cercle.closePath()

}


