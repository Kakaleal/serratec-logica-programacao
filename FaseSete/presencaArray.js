var alunos =[];
var presenca= [];

alunos[0]= " adrian "
presenca[0] = true
alunos[1]= "Andre luis"
presenca[1]=true;
alunos[2]= "Andre silva"
presenca[2]= true;
alunos[3]= "antonio alves"
presenca[3]= true;
alunos [4]= "beatriz neves"
presenca [4] = true;
alunos[5]= "bruno oliveira"
presenca[5]=true
alunos[6]= "carolina tardin "
presenca[6]=true
alunos[7]= "daniel cesar"
presenca[7]= true
alunos[8]= " diego dias"
presenca[8]= true
alunos[9]= "eduardo pina"
presenca[9]=true

var qnt = alunos.length;
console.log("A quantidade de alunos : " + qnt );

var nome= " diego dias"
var cadeira= -1;

for (var i= 0; i< qnt; i++){ 
    //criterio de busca
    if ( alunos[i]== nome) {
        cadeira= i;
        break;
    }
}
  if ( cadeira == -1){
      console.log (" Nao encontrei o aluno " + nome + " na listagem.");   
  }
else{
   console.log(" O aluno " + nome + " está na cadeira " + cadeira ); 
} 
// o total de presentes 
var total= 0 ;
 
for ( var i=0; 1< presenca.length; i ++){
   //criterio 
   if (presenca[i]) {
        total++;
 console.log ("O total de presentes é "+ total);
   }
}