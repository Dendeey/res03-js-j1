let goodNumber = 42;
let userNumber
while(goodNumber !== parseInt(userNumber))
{
    userNumber = window.prompt("Trouvez le bon nombre ! (Tapez en un au hasard pour commencer)");
    
    if(parseInt(userNumber) < goodNumber)
    {
        window.alert("C'est plus !");
        
    }
    else if(parseInt(userNumber) > goodNumber)
    {
        window.alert("C'est moins !");
        
    }    
}

window.alert("Trouvé !!!");