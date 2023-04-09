function nb_jours(d= new Date()) {
   var X = d.getTime();
   var Y=Date.now();
   
   if (X> Y) {

    var jours=(X-Y)*1000*3600*24;

    } else {
        var jours=(Y-X)*1000*3600*24;

    }  
    return  jours;
}