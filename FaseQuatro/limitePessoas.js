const  prompt  =  require ( 'prompt-sync' ) ();

var  limite  =  17
  quantidade =  prompt ( 'Qual a quantidade de pessoas na loja?' ) ;

   if  ( quantidade  <=  limite ){ 
 console . log ( 'Pode entrar.' ) ;
  else 
console . log ( 'Aguarde alguém sair.' ) ;
}