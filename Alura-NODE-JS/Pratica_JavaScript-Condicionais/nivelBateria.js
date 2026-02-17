/*Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga.
O sistema deve classificar a bateria nas seguintes categorias:

"Crítica": se a bateria estiver abaixo de 20%
"Moderada": se estiver entre 20% e 80%
"Cheia": se estiver acima de 80%
Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.
*/

const nivelBateria=82

if (nivelBateria < 20){
    console.log('Nível Crítica -  Abaixo de 20%');
}else if(nivelBateria>=20 && nivelBateria<=80){
    console.log('Nível Moderado - Entre 20% e 80%');
}else if(nivelBateria>=80 && nivelBateria<=100){
    console.log('Nível Alto - Acima de 80%');
}else{
    console.log('Status de báteria inválido!')
}

//outro jeito de fazer 

/*
const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);
*/