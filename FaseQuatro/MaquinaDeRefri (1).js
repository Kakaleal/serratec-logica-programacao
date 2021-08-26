/*
Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Componentes: Carolina Tardin, Carlos Alberto Rodrigues, Diego Faria, Gilnei Lima, Leandro Fita, Marcella Alzuguir
Autor da proposta: Leandro Fita
Data: 21/08/2021

Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços
•    R$ 1,99
•    R$ 3,50
•    R$ 3,99
•    R$ 6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$ 5,00
•    R$ 10,00
•    R$ 20,00
*/

const terminal = require("prompt-sync")();

var numero;
var numeroNota;
var preco = [2.0, 3.5, 4.0, 6.0];
var notas = [2.0, 5.0, 10.0, 20.0]
var escolhaTxt;
var troco;

console.log("Maquina de refrigerante.");
console.log("[1] Pepsi: R$2,00");
console.log("[2] Sprite: R$3,50");
console.log("[3] Dolly: R$4,00");
console.log("[4] Coca-Cola: R$6,00");

console.log("Digite o número do refrigerante desejado.")
do {
    numero = terminal(": ");
    numero = parseInt(numero);

    if (! (numero > 0 && numero <= 4)) console.log("Número inválido. Digite novamente. ")

} while (! (numero > 0 && numero <= 4))

switch (numero) {
    case 1: escolhaTxt = "Pepsi"; console.log("Você escolheu " + escolhaTxt + "Seu total é: R$2,00"); break;
    case 2: escolhaTxt = "Sprite"; console.log("Você escolheu " + escolhaTxt + "Seu total é: R$3,50"); break;
    case 3: escolhaTxt = "Dolly"; console.log("Você escolheu " + escolhaTxt + "Seu total é: R$4,00"); break;
    case 4: escolhaTxt = "Coca-Cola"; console.log("Você escolheu " + escolhaTxt + "Seu total é: R$6,00"); break;
}

console.log("Suas opções de pagamento (notas):")
console.log("[1]R$2,00");
console.log("[2]R$5,00");
console.log("[3]R$10,00");
console.log("[4]R$20,00");
console.log("Digite o número correspondente.")

do {
    numeroNota = terminal(": ");
    numeroNota = parseInt(numeroNota);

    if (! (numeroNota > 0 && numeroNota <= 4)) console.log("Número inválido. Digite novamente. ");

    if (preco[numero-1] > notas[numeroNota-1]) console.log("Dinheiro insuficiente. Tente novamente.");
} while ((! (numeroNota > 0 && numeroNota <= 4) || preco[numero-1] > notas[numeroNota-1]))

troco = notas[numeroNota-1] - preco[numero-1];

console.log("Troco: R$" + troco);
console.log("Agradecemos pela compra. Volte sempre!")