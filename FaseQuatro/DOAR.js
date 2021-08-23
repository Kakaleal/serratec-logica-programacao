const  prompt  =  require ( 'prompt-sync' ) ( ) ;

console . log ( '== Banco de Sangue == \ n [Digite “Sim” ou “Nao” nas restrições a seguir]' ) ;
//entrada 
var  idade  =  prompt ( "Idade abaixo de 16 ou acima de 69 anos:" ) ;
var  kg  =  prompt ( "Pesa menos de 50kg:" ) ;
var  portador  =  prompt ( "Portador de Hepatite:" ) ;
var  malaria  =  prompt ( "Já teve Malária:" ) ;
var  doaçao  =  prompt ( "Fez doação recente:" ) ;
//proc

var  resultado  =  idade  ==  "Nao"  &&  kg  ==  "Nao"  &&  portador  ==  "Nao"  &&  malaria  ==  "Nao"  &&  doaçao   ==  "Nao" ;
//Saida

console . log ( "Resultado da triagem" ) ;
console . log ( "Pode doar sangue?" ,  resultado) ;