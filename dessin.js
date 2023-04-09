 
var essaie = document.getElementById('canvas');
if (!essaie) {
  alert("Impossible de récuperer le canvas")
}
var ctx = essaie.getContext('2d');
if (!ctx) {
  alert("Impossible de récuperer le contexte du canvas")
  }
var image= document.getElementById("image");
        
image.addEventListener('load',affiche);
        
function affiche() {
  ctx.drawImage(image,50,25,500,350);
}
                  
 