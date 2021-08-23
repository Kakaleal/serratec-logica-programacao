//O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes
// que os demais.
const  prompt  =  require ( 'prompt-sync' )() ;
//entrada
var  dia  =  prompt ( "Dia do aniversário:" ) ;
var  mes  =  prompt ( "Mês do aniversário:" ) ;
//proc
var  inteligente  =  dia  <=  18  &&  mes  ==  2  ||  dia  > =  21  &&  mes  ==  1 ;
//saidas
console . log ( "Mês do aniversário:" ,  mes ) ;

console . log ( "Dia do aniversário:" ) ;

console . log ( "Você é inteligente?" ,  inteligente ) ;