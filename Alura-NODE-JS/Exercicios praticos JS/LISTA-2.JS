//1. Verificação de maioridade
//Crie uma variável idade.
//Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.

let idade = 14
const maiorIdade = idade >= 1199
console.log(idade >= 18)
console.log('A pessoa é maior de idade?', maiorIdade)

//2. Situação do aluno
//Crie duas variáveis com notas de um aluno.
//Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.

const nota1=9
const nota2=5
const media=(nota1+nota2)/2
const aprovado=media >= 7
console.log('A média do aluno é:', media)
console.log('O aluno está aprovado?', aprovado)

//3. Simulação de troco
//Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.

const valorCompra = 35.90
const valorPago = 50
const troco = valorPago - valorCompra
console.log('O troco a ser devolvido é:', troco.toFixed(2))

/*4. Validação de senha
Crie duas variáveis com senhas digitadas em momentos diferentes.
Exiba no console o resultado da comparação que verifica se as senhas são iguais.*/ //aprendeu comentario novo kkk

const senha1 = '123SenhaDeGeral'
const senha2 = '123456EssaTambem'
console.log('As senhas são iguais?', senha1 === senha2)

/*5. Controle de faltas
Crie as variáveis totalAulas e faltas.
Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.*/

const totalAulasAnoLetivoBrasil=200
const porcfaltasAceitas=0.25
const limiteFaltas=totalAulasAnoLetivoBrasil*0.25
const faltas=51 // 51 faltas ultrapassa o limite de 50 (25% de 200)
console.log('O limite de faltas permitido é:', limiteFaltas)
console.log('As faltas ultrapassaram o limite?', faltas > limiteFaltas)

/*6. Verificação de login
Crie duas variáveis booleanas: temLogin e temSenha.
Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.*/

const temLogin = true
const temSenha = false
console.log('O usuário pode fazer login?', temLogin && temSenha)

/*7. Valor negado
Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.*/

const disponivel = true
console.log('O produto está disponível?', !disponivel)

/*8. Condições compostas
Crie duas variáveis numéricas.
Exiba no console o resultado da expressão que verifica se:

os dois números são pares e
os dois números são iguais.*/

const num1 = 2
const num2 = 2
console.log('Os dois números são pares?', num1 % 2 === 0 && num2 % 2 === 0)
console.log('Os dois números são iguais?', num1 === num2)

/*9. Calculadora de porcentagem
Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."*/

const porcentagem = 15
const valor = 120
const resultado = valor * porcentagem / 100
console.log(`${porcentagem}% de ${valor} é igual a ${resultado}`)

/*10. Ordem de operações
Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.*/

const expressao = 2 + 3 * 5
console.log('A Expressão é:', '2 + 3 * 5')  
console.log('O resultado da expressão é:', expressao)
console.log('Explicação: A multiplicação foi feita antes da soma, pois a ordem de precedência em expressões aritméticas é a multiplicação e a divisão, seguida pela adição e subtração.')
console.log('Portanto, primeiro foram realizadas as multiplicações e divisões, e depois as adições e subtrações.')



