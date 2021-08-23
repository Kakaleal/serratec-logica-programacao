//É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.

const  prompt  =  require ( 'prompt-sync' ) ( ) ;
//entrada
var  sexo  =  prompt ( "Qual o sexo da pessoa a ser consultada:" ) ;
var  aniv  =  prompt ( "Qual o ano de nascimento:" ) ;
var  emancipaçao1  =  sexo  ==  "Feminino"  &&  bday  <=  1999 ;
var  emancipaçao2 =  sexo  ==  "Masculino"  &&  bday  <= 2003  ;

console . log ( "Sexo:" ,  sexo ,  "\ nAno de nascimento:" ,  bday ) ;
//proc && saida
if ( sexo  ==  "Feminino" ){

    console . log ( "Cidadão Emancipado?" ,  emancipaçao1) ;

else  ( sexo  ==  "Masculino" );

    console . log ( "Cidadão Emancipado?" ,  emancipaçao2) ;
}