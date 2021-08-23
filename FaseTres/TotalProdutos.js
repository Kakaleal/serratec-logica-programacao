//Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. 
D//epois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

//entrada
const  prompt  =  require ( 'prompt-sync' ) ( ) ;
//processamento
var  produtos  =  prompt ( "Quantos produtos deseja comprar?" );
//saida
console . log ( "Parabéns por comprar" ,  produtos,  "produtos!" );