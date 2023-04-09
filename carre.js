window.onload= function my_carre () {

    var mon_carre =  document.getElementById("mon_carre");

    if (!mon_carre) {
        alert('Impossible de récupérer le text');
    }

    var carre= mon_carre.getContext('2d');
    carre.fillStyle= '#4444CC'
    carre.fillRect(0,0,100,100);
    carre.strokeRect()
    
}