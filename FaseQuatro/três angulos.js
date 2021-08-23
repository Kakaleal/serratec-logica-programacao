const  prompt  =  require ( 'prompt-sync' ) ( ) ;

var insira   =  prompt ( 'Insira um ângulo interno do lado A' ) ,
  b  =  prompt ( 'Insira a ângulo interno do lado B' ) ,

  c  =  prompt ( 'Insira um ângulo interno do lado C' ) ,

  somaAngulo  =  a  +  b  +  c ;

  var verifica  =  somaAngulo  ==  180 ? 'Triângulo é válido' : 'Triângulo é inválido' ;

console . log ( 'As medidas são válidas?' ,  verifica ) ;