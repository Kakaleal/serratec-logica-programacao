const prompt=  require ("prompt-sync")();

var cor= prompt ("Qual a cor do indicador?  (verde, vermelho)");

var liberado = ( cor == "verde");
var espera = ( cor != "verde");
 
if (liberado)
   console.log (" Pode entrar!");
else
   console.log ("espere  um pouco");