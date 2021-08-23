const prompt = require('prompt-sync')();
//entrada 

var lado = prompt('Digite a medida do lado do seu quadrado:');

var unidadeMedida = prompt('Qual unidade de medida? (Ex: cm)');

var area = lado ** 2;

console.log( "O seu quadrado tem de lado"  + lado +  unidade medida + area);