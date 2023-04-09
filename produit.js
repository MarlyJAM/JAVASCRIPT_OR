function produit (valeur) {

    var valeur = new Array();
    var produit = valeur[0];
    var i = 1 ;
    while (valeur.length>i) {
       
        produit = produit*valeur[i]
        i= i++;

    }

    if (valeur.length=i) {
        produit = valeur[0];
    }

}