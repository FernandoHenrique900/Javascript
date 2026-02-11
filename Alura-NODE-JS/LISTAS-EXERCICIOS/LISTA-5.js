/*1. Função de saudação
-Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
*/
pessoa = 'David' // variável global, pode ser acessada dentro da função

function saudacao(pessoa) { // função com parâmetro pessoa
    console.log("Olá! Seja bem-vindo(a)!", pessoa); // exibe a mensagem com o nome da pessoa
}
saudacao(pessoa); // chamada da função com a variável global pessoa


/*2. Função com parâmetros
Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e 
tenho [idade] anos." */
nome = 'Stallone'
idade = 79
function apresentarPessoa(nome, idade) { // função com parâmetros nome e idade
    console.log("Esse é o ",nome, "e ele tem", idade, "anos."); // exibe a mensagem com o nome e a idade da pessoa
}
apresentarPessoa(nome, idade); // chamada da função com as variáveis globais nome e idade

/*3. Cálculo de IMC
-Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
A função deve calcular o IMC utilizando a fórmula:

IMC = peso / (altura * altura)

A função deve exibir no console a mensagem: "O IMC de [nome] é [IMC].", 
onde [nome] é o valor do parâmetro nome e [IMC] é o resultado do cálculo.
*/

nome1 = 'Stallone'
peso = 120
altura = 1.80
function calcularIMC(nome1, peso, altura) { // função com parâmetros nome, peso e altura
    imc = peso / (altura * altura); // cálculo do IMC
    console.log("O IMC de", nome1, "é", imc.toFixed(2)); // exibe a mensagem com o nome e o IMC da pessoa
}
calcularIMC(nome1, peso, altura); // chamada da função com as variáveis globais nome, peso e altura


/*4. Verificar aprovação
Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.*/

nomeAluno='Silvio Santos'
nota = 9

function verificarAprovacao(nota, nomeAluno){
    if(nota >=7){
        console.log (nomeAluno, ' está Aprovado')
    }else{
        console.log(nomeAluno, 'está Reprovado')
    }
}

verificarAprovacao(nota,nomeAluno)

/*5. Número par ou ímpar
-Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar.
Teste a função com diferentes valores.*/

i = 5

function ehPar(i){
    if (i%2==0){
        console.log('o número,',i,'é par!')
    }else{
        console.log('o número,',i,'é impar!')
    }
}
ehPar(i)

/*6. Função soma
-Crie uma função que recebe dois números e retorna a soma deles. 
Exiba o resultado no console com uma frase completa.*/

num1=9
num2=11

function SomaTudo(num1,num2){
    resultado=num1+num2
    console.log('Soma de, ',num1, 'mais', num2, 'é igual a = ', resultado)
}

SomaTudo(num1,num2)

/*7. Reutilizando código
-Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
A função deve receber dois parâmetros: valorCompra e valorPago.

A função deve:

calcular o valor do troco
retornar o valor calculado
Depois, utilize o retorno da função para exibir o valor do troco no console.*/

valorCompra= 200
valorPago= 120

function valorCalculado(valorCompra, valorPago){
    troco=valorCompra-valorPago
    if(troco >=0){
        console.log('Seu troco é de R$', troco)
    }else{
        console.log('Está faltando R$', troco,'. Por favor pague o restante!')
    }
}
valorCalculado(valorPago, valorCompra)

/*8. Arrow function
-Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.*/

const somar = (a,b) => a + b;
console.log ('Soma com Arrow function', somar(11,9));

/*9. Callback simples
-Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa.
Teste passando uma função que imprime "Executando ação!".*/

function executarAcao(acao) { 

acao(); 

} 

executarAcao(
    function() { 

console.log("Executando ação!"); 

}
); 

/*9.1 - Usando Callback */

executarAcao(() => {
    console.log("Executando ação com ArrowFunction!");
});

/*10. Desafio do quiz
-Crie uma função fazerPergunta(pergunta, respostaCorreta). 
A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).*/
// 1. Função de saudação 

function saudacao() { 

console.log("Olá! Seja bem-vindo(a)!"); 

} 

saudacao(); 

 

// 2. Função com parâmetros 

function apresentarPessoa(nome, idade) { 

console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos."); 

} 

apresentarPessoa("Ana", 30); 

 

// 3. Cálculo de IMC 

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

let resultadoIMC = calcularIMC(70, 1.75);
console.log("Seu IMC é: " + resultadoIMC);

 

// 4. Verificar aprovação 

function verificarAprovacao(nota) { 

if (nota >= 7) { 

console.log("Aprovado"); 

} else { 

console.log("Reprovado"); 

} 

} 

verificarAprovacao(6); 

 

// 5. Número par ou ímpar 

function ehPar(numero) { 

return numero % 2 === 0; 

} 

console.log("O número é par? " + ehPar(4)); 

 

// 6. Função soma 

function somar(a, b) { 

return a + b; 

} 

console.log("Soma: " + somar(5, 10)); 

 

// 7. Calculadora de troco 

function calcularTroco(valorCompra, valorPago) {
  let troco = valorPago - valorCompra;
  return troco;
}

let resultadoTroco = calcularTroco(35.9, 50);
console.log("Troco: R$ " + resultadoTroco);


 

// 8. Arrow function 

const somarArrow = (a, b) => a + b; 

console.log("Soma (arrow): " + somarArrow(3, 7)); 

 

// 9. Callback simples 

function executarAcao(acao) { 

acao(); 

} 

executarAcao(function() { 

console.log("Executando ação!"); 

}); 

 

// 10. Desafio do quiz 

function fazerPergunta(pergunta, respostaCorreta) { 

let respostaUsuario = respostaCorreta; // simulação da resposta 

if (respostaUsuario === respostaCorreta) { 

console.log("Resposta correta!"); 

} else { 

console.log("Resposta errada!"); 

} 

} 

fazerPergunta("Qual é a capital do Brasil?", "Brasília"); 