/* O programa “bem-vindo” pergunta seu nome e sobrenome, 
e depois gentilmente te cumprimenta.
Qual o seu nome? Moisés
E sobrenome? Baddini
Olá Moisés Baddini, seja bem vindo ao universo da programação!*/

const  prompt  =  require ( 'prompt-sync' ) () ;

var nome= prompt (" qual seu nome?");
var sobrenome= prompt(" qual seu sobrenome?");

console.log(" olá, " + nome + sobrenome +  "seja bem vindo ao universo da programação");


