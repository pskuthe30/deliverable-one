   
    var rainfall=0;
    while(rainfall==0){
      rainfall = prompt ("How many inches of Rain fell?");
    } 
 
 for (var i=1 ; i <= rainfall; i++) {
  document.write("*");
    
    }
    
    var answer= null;
    answer= prompt("Did you use fertilizer?")

if (answer=="no" || answer=="NO")
{
  if (rainfall >=20)
  {
     console.log("The yield should be 45 bushels per acre");
    }
   else
    { console.log("The yield should be 40 bushels per acre");
  }
}
else {
    var brand = prompt("<br />"+" Did you use premium or regular fertilizer?");
   
    if (brand=="premium")
       {
      if (rainfall < 20) {
        console.log("The yield should be 34.5 bushnels per acre");}
          
          else if (rainfall >= 20)
          console.log("The yield should be 51.45 bushnels per acre");
    }
   else if (brand=="regular")
    {
       if (rainfall < 20) 
       console.log("The yield should be 33 bushnels per acre");
      else if (rainfall >= 20) 
      console.log("The yield should be 45 bushnels per acre");
    }
  }

  