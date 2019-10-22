var vet1=[];
var vet2= [];
var m=0;
var m2=0;
var i;
var acertou= 0;
var errou = false;

function memoria (valores){
    var n = valores;
    vet1 [m]=n;
   if (m==3){
        alert ("Digite novamente a mesma sequência anterior");
    }
    if (m>3){
        vet2 [m2]= n;
    if (m2>=3){
    
       // m2++;
    }
    m2++;
    if (m2==4){
    for (i=0; i<4; i++){
        if (vet1[i]==vet2 [i]){
           acertou++;
        }
    }
    if (acertou ==4){
        alert ("voce acertou");
        window.location.href= "m.html";
    }else {
        alert (" voce errou");
        window.location.href= "m.html";
    }
}
console.log (acertou);
    }

    m++;
    console.log ("valor de m:"+m);
    console.log ("valor de m2:"+m2);
    console.log ("valor de n:"+n);
}

