 //let b1 = document.querySelector('button')
 //b1.addEventListener('click',function() {
//	 	     age = prompt("Quel age avez-vous?");
//	         var content;
//	         var infos = new Array();
//
//	         if (age>16 AND 65>age AND isNaN(age)==false) {
//	            infos[infos.lenght]= age;
//	            alert(age);
//	            content = prompt('Que puis-je faire pour vous?');

//	         } else {
//	             alert("Vous n'avez rien à faire ici");
//	         }


// });


//<img src="screen/13199.png">
 //   <button>Click on me</button>

 //if (age>16 AND 65>age AND isNaN(age)==false) {
//                p.innerHTML = "Vous avez " + age;
//                content = prompt('Que puis-je faire pour vous?');
//<img src="screen/13199.png">
  //  <button>Click on me</button>

 //            } else {
 //                alert("Vous n'avez rien à faire ici");
 //            }

function user() {

	 age = prompt("Donnez votre âge : ");
        var p = document.querySelector('p');
        p.innerHTML = "Vous avez " + age;
        if (age>18 ) {
           questions= prompt("Que puis-je faire pour vous?");

            confirm("Votre demande a été prise en compte");


            p.innerHTML = "Vous avez "+" " + age+" "+" et votre demande est :"+" "+questions;
        }else{
            alert("Votr age est inférieur à 18 ans");
        }
	
}