//1. Boas-vindas personalizadas
//Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'John Winchester'
console.log('Olá,', nome, '! Seja bem-vindo(a) ao curso de JavaScript!')


//2. Cálculo de idade
//Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2026
let anoNascimento = 1992

console.log('Você tem', (anoAtual - anoNascimento), 'anos.')

//3. Mensagem de localização
//Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Albuquerque'
let estado = 'New Mexico'
let pais = 'Estados Unidos'

console.log('Você está em', cidade, '-', estado, ',', pais, '.')

//4. Tipo da variável:
//Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = false
console.log(typeof temCarteira) //resultado: boolean

//5. Simulação bancária simples:
//Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0
saldo += 200 //depósito de 200
saldo -= 50 //saque de 50

console.log('Seu saldo final é:', saldo)

//6. Média de notas:
//Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let matematica = 8
let portugues = 7
let ciencias = 9

console.log('Matemática:', matematica)
console.log('Português:', portugues)
console.log('Ciências:', ciencias)


let media = (matematica + portugues + ciencias) / 3

console.log('Sua média final é:', media)

//7. Reajuste de salário:
//Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000
let reajuste = salario * 0.10
salario += reajuste

console.log('Seu novo salário é:', salario)
console.log('Você recebeu um reajuste de:', reajuste)

//8. Contador de cliques:
//Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliques = 0
cliques += 1 //simulação de clique
cliques += 1 //simulação de clique
cliques += 1 //simulação de clique

console.log('O total de cliques é:', cliques)

//9. Constantes não podem ser alteradas:
//Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const PI = 3.14
console.log(PI)
//PI = 3.14159265359 //erro: Valor declarado é uma constante, não pode ser alterado pós. inicialização.

//10. Concatenando tipos diferentes
//Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'Olá, meu nome é '
let nome2 = 'John Winchester'
let idade = 34

let mensagemCompleta = mensagem + nome2 + ' e eu tenho ' + idade + ' anos.'

console.log(mensagemCompleta)
console.log(typeof mensagemCompleta) //resultado: string
