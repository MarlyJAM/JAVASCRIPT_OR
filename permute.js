function permute ( t1 ,  t2){
   
   var t1= new Array();

   var t2= new Array();

   if (t1.length == t2.length) {

   	for (var i = 0; i < t1.length; i++) {
   		t1[i]=t2[i]
   		t2[i]=t1[i]
   	}
   }

   return  t1 ,  t2;

}
	

function permutation ( t1 ,  t2){
   
   var t1= new Array();

   var t2= new Array();

   if (t2.length< t1.length) {

      for (var i = 0; i < t1.length; i++) {

           t2[i]=t1[i]

         }
         


      
   } else {


         for (var i = 0; i < t1.length; i++) {

            t1[i]=t2[i]


         }
        
      
   }
   return  t1 ,  t2;

}
	

