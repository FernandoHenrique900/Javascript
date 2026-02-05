/*TIPO DE FUNCTION*/

function saudacao(nome){ // 'parametro' da funcao saudacao
    console.log('Olá', nome)
}
saudacao('Charles') //nome é o 'argumento'
saudacao('Karen') //


/***********************************/
let numero=4

function calcularDobroDeUm(numero){
    return numero * 2
}
const numeroDobrado = calcularDobroDeUm(4)
console.log ('O dobro de', numero, 'é', numeroDobrado)

/* --- OUTRO JEITO --- */
nume=10
const calculaDobroDeUm = nume => nume * 2
const numeroDobro = calculaDobroDeUm(10)
console.log ('O dobro de', nume, 'é', numeroDobro)
/******************/
//Como funciona a instrução return
function somar(a, b) {
  return a + b;
}

const resultado = somar(5, 7);
console.log(resultado); // Exibe 12

/********************/
//Consequências de omitir o return
function dividir(a, b) {
  a / b;
}

const resultadoDivisao = dividir(32, 8);
console.log(resultadoDivisao); // Exibe undefined

/*Arrow Funcion => */
const saudar = (nome) =>{
    console.log ('Vida Longa e prospera', nome)
}
saudar('Charles')

/*Arrow Function => simplificada */
const ola = nome => console.log('Olá', nome)

ola ('Marcos')

/*
Por que isso importa?
Entender a diferença entre funções tradicionais e Arrow Functions é fundamental, principalmente ao lidar 
com código legado, ou seja, sistemas antigos ou escritos antes do ES6. Muitos códigos antigos ainda utilizam 
funções tradicionais com .bind(). Portanto, é essencial que você compreenda essa lógica claramente, 
para lidar bem com qualquer cenário que encontrar.

Guia de bolso:

this: Refere-se ao contexto onde a função é chamada.

Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.

Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas.

Antes de Arrow Functions, usávamos .bind() para corrigir problemas com this.

*/

