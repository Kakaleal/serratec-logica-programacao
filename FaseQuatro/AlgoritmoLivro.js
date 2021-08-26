/*## Descrição:
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está
sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos
dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem
ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas
decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está
iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo
usuário não pode ser o mesmo da recomendação. */
var prompt = require("prompt-sync")();
console.log("Olá, seja bem vindo.");
var ler = prompt("Que lirvo você esta lendo ?");
var ler2 = prompt("Quantas paginas tem esse livro ?");
var ler3 = prompt("Quantos dias você precisa para ler esse livro ?");

var tempoLeitura = Math.round(ler2 / ler3);

console.log(
  "Você precisa ler " +
    tempoLeitura +
    " paginas por dia para poder ler esse livro dentro do tempo desejado."
);

var recomendarlivro1 = ler2 <= 100 && ler != "Revolucao dos Bichos" && ler != "O Alienista";
var recomendarlivro2 = ler2 > 100 && ler2 <= 499 && ler != "O Homem Invisivel" && ler != "Eu, Robo";
var recomendarlivro3 = ler2 >= 500 && leer != "Moby Dick" && ler != "Duna";

if (recomendarlivro1) {
  console.log(
    "Quando terminar de ler o livro atual, que tal ler: Revolucao dos Bichos ou O Alienista, creio que você ira gostar!!"
  );
}

if (recomendarlivro2) {
  console.log(
    "Quando terminar de ler o livro atual, que tal ler: O Homem Invisivel ou Eu, Robo, creio que você ira gostar!!"
  );
}

if (recomendarlivro3) {
  console.log(
    "Quando terminar de ler o livro atual, que tal ler: Moby Dick ou Duna, creio que você ira gostar!!"
  );
}