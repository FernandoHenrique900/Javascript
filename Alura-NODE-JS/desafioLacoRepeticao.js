//Desafio - Contar numeros pares / impares de 1 a 100
 
let contPar=0
let contImpar=0
i = 0
for(i=0; i<=100;i++){
    if(i%2==0){
    //console.log('Numero é ',i,' par')
    contPar++
    }else{
    //console.log('Numero é ',i,' impar')
    contImpar++
    }
}
console.log('Números pares:', contPar, 'Números impares', contImpar)

    