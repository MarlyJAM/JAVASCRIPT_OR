if ( joueur ==="Trisomie E" || joueur ==="L'hippocampe" || joueur ==="Amylase" || joueur ==="Rachis" ) {
    score+=1;
    alert(score);
  } else {
      document.location.href="entree.html";
      alert("Perdu");
  }


  switch (joueur) {
    case joueur ==="Trisomie E":
        { 
            score+=1;
            alert("Tu as :"+""+score+""+"points");
        }
        break;
  
    case  joueur ==="L'hippocampe":  
       { 
            score+=1;
            alert("Tu as :"+""+score+""+"points");
       }

        
        break;

    case  joueur ==="Amylase":
        
        { 
            score+=1;
            alert("Tu as :"+""+score+""+"points");
        }

        break;


    case  joueur ==="Rachis" :

        { 
            score+=1;
            alert("Tu as :"+""+score+""+"points");
        }
        
        break;

    case  joueur !="Trisomie E" || joueur !="L'hippocampe" || joueur !="Amylase" || joueur !="Rachis":

        {
            alert("Perdu");
            document.location.href="entree.html";
        }
      
        
        break;

  }