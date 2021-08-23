const prompt = require('prompt-sync')();
//entrada 

const cupom = prompt('Digite o número de cupons:');
//processamento 

var pontos = cupom * 1;
//saida 
console.log(" De acordo com seus cupons, você tem " +
    pontos +
    "pontos no programa de fidelidade!");