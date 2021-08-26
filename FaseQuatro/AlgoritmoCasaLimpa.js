
//Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo.
 //Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para cada cômodo que for da sua escolha
 
 const prompt= require ("prompt-sync")();

 var sala= prompt (" Voce ja arrumou a sala?");
 
 if( sala == " sim"){
   console.log("Passe para o próximo cômodo");
 } else {
    console.log(" Está faltando limpar este cômodo");
 }