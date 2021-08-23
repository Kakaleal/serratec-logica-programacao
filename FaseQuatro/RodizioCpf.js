const  prompt  =  require ( 'prompt-sync' ) () ;

var dia  =  prompt ( 'Dia (hoje):' ) 
var cpf  =  prompt ( 'Digite seu CPF :' );

var   diasPar  =  dia  %  2  ==  00 

var cpfPar  =  cpf  %  2  ==  00;
 cpfPar  ==  diaPar ;

console . log ( 'Autorizado a entrar na loja?' ,  validar ) ;