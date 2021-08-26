/*açai.js
escolher o tamanho do copo do açaí (300 ml,400ml e 700ml).
escolher um dos complementos (banana, granola e leite em pó).
gerar o preço do pedido.*/
var tamanho1= 300
var tamanho2= 400
var tamanho3= 700


const  prompt  =  require ( 'prompt-sync' ) () ;

var ingrediente = prompt ( "banana ", " granola", " leite em pó");

if (tamanho1){
 console.log(" 5 reias");
 if (tamanho2)
 console.log(" 7 reais");
} else {
    console.log( " 10 reais ") ;
} 
    

