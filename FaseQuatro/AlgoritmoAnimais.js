 /* Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?*/

const prompt = require ("prompt-sync")();

var animais = ["1 Cachorro", "2 Coelho", "3 Gato", "4 Macaco", "5 Burro", "6 Vaca"];

console.log ("Olá!\nA IA sempre sonha com muitos animais. Vamos ver se você sonhou com o mesmo animal que ela?\nEscolha o número que corresponda ao animal que você sonhou");
console.log(animais);

do  {
    var  numeroJogo = prompt ("Escolha o número que corresponde ao animal que você sonhou:");
    var numeroSorteado = Math.floor(Math.random() * 6) + 1;
    var  animalSorteado = animais [numeroSorteado];
    var  apostaDoJogador = animais [numeroJogo] 
    console.log ("Você escolheu", apostaDoJogador, "o animal sorteado foi", animalSorteado)
    var teste = numeroSorteado != numeroJogo
    
    if  (teste) {
        console.log ("Que pena! Esse não foi o animal que a IA sonhou");   
    }
    else  {
        console.log ("Que legal! Nós sonhamos com o mesmo animal!") ;    
    } 
}
while (teste)
