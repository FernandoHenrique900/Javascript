//HOF - HIGHER-ORDER-FUNCTION === funcão que recebe outra função como parametro

function calcular(num1,num2,operacao){
    return operacao(num1, num2)
}

function soma(num1,num2){
    return num1+num2
}

function subtracao(num1,num2){
    return num1-num2
}

function multiplicacao(num1,num2){
    return num1*num2
}

function divisao(num1,num2){
    return num1/num2
}
/* função que retorna o nome da operação como string no console.log*/   
const resultado0 = calcular(2,7, soma) //soma é um callback function
console.log('Resultado da soma entre 2 e 7 é:', resultado0)

/* Desse jeito retorna o nome da operação como string no console.log*/
const num1 = 2
const num2 = 7
const operacao = subtracao

const resultado = calcular(num1,num2, operacao)

console.log('Resultado da', operacao.name, 'entre', num1, 'e', num2, 'é', resultado)  
