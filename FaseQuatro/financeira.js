
/*O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função,
 além do valor do empréstimo que deseja contratar. 
 Então será calculado 86% do valor desejado como crédito disponível. 
 A resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings. 
O valor será escrito separadamente (no console.log).

Senhor Moisés, você está com sorte! Pela sua função de Programador, 
e sua excelente relação com a empresa onde trabalha (Serratec), 
foi aprovado um crédito em sua conta corrente de R$ 200.00*/



const  prompt  =  require ( 'prompt-sync' ) () ;
 var nome= prompt("qual seu nome  ?");
 var empresa= prompt(" Qual sua empresa   ?");
 var funçao = prompt (" Quyal sua funçao?");
 var contratar= prompt (" Qual valor do emprestimo que deseja contratar ?");

 console.log(" senhor "+ nome + " você está com sorte! " + "Pela sua função de  " + " e sua excelente relaçao com a "+ empresa+ "fOI APROVADO O TOTAL DE "+ contratar); 

