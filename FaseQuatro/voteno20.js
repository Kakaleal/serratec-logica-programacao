const  prompt  =  require ( 'prompt-sync' ) ( ) ;


console . log ( ' Eleições 2020 ' ) ;
var  idade  =  prompt ( 'Digite sua idade:' );
  AutorizadoVotar  =  idade  > =  16 ;

console . log ( 'Você já pode votar?'+  AutorizadoVotar ) ;