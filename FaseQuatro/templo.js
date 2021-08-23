// *Em tempos de pandemia, só é permitido entrar em templos religiosos de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

//Digite a temperatura: 36,9
//Eua máscara (S ou N): N
//Autorizar a entrada? Falso* //

const  prompt  =  require ( 'prompt-sync' ) ( )
//entr
var temperatura  =  prompt ( 'Digite a sua temperatura em Celcius:' ) ,
var máscara  =  prompt ( 'Usa máscara (S ou N):' );
var  status  =  temperatura  <=  37,5
//pro&&saida 
if  ( mascara  ==  'S'  ){
      console.log ("VocÊ pode entrar no Templo Religioso!");

else  if  ( mascara  ==  'N' ){
  console.log ("Você não pode entrar no Templo Religioso")
