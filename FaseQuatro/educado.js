/*
O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. 
Depois disso, uma saudação para você aparece na tela*/

const  prompt  =  require ( 'prompt-sync' ) () ;

var educado = prompt (" Qual seu nome , como você gostaria de ser chamado?");
console.log(" Oá "+ educado);

