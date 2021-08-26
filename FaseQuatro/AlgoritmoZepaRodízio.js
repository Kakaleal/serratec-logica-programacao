/*Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido.
Dica: Use paçoca como "pacoca" e café como "cafe".*/
var cafe
var doce1 = bala
var doce2= pirulito
var doce3= bombom
var doce4= pacoca
var doce5= jujuba

const prompt= require ("prompt-sync")();

var zepa= prompt ( " O que desejas?");
 
if ( zepa== bala ||zepa== pirulito || zepa== bombom || zepa ==jujuba ){
    console.log ( " Obrigado pela preferência!")}
    if ( zepa == cafe || zepa== pacoca){
console.log ("Desculpa, infelizmente devorei o estoque...")
    }else {
        console.log ("Por favor escolha um produto válido.");

    }  