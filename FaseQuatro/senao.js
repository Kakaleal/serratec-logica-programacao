const limite  = 8;
var qnt = 4;

var liberado = ( qnt < limite);
var proximo = (qnt == 7);

if (liberado)
    if (proximo) 
    console.log(" N deixe entrar sem blusa");
    else
    console.log("espere, vc e o proximo");
else 
console.log (" entrada autorizada, é o proximo");