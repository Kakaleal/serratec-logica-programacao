/*Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Squad de Origem (Requisito): Rock n' Beer (Squad 4)
● Autor (Descrição): Gustavo J. Barros
● Arquivo: sonhoAnimais.js
● Elaboração do Requisito: 22/08/2021
## Descrição:
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?
## Dicas:
• Crie uma função para gerar os números aleatórios.
• Diga sempre qual é o animal sorteado
• Diga se ele acertou ou não
• Dê uma nova chance até ele acertar. */

var prompt = require("prompt-sync")();
var pessoa = prompt("Qual numero de animal você sonhou ?");

function generaleatorio(max) {
  return Math.floor(Math.random() * max);
}

var animais = [];
animais[0] = "cavalo";
animais[1] = "cachorro";
animais[2] = "vaca";
animais[3] = "jacare";
animais[4] = "sapo";
animais[5] = "tigre";
animais[6] = "lagarto";
animais[7] = "cobra";
animais[8] = "dragao";
animais[9] = "urso";


do {
  var sonhoIgual = Iasonho == pessoa;
  var aleatorio = generaleatorio(9);
  var Iasonho = animais[aleatorio];
  console.log("A IA sonhou com " + Iasonho);
  pessoa = prompt("Qual o nome do animal que você sonhou ?");

  if (sonhoIgual) {
    console.log("Você acertou !!. A Ia sonhou com "+ Iasonho + " tambem.");
    break;
  } else {
    console.log("você errou, tente outra vez !!");
  }
} while (!sonhoIgual);