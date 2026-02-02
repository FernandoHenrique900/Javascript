//Comparação de valores - validando

const valor1 = 70
const valor2 = 50

console.log ('São iguais?', valor1 == valor2) //resultado: false, pq 70 é diferente de 50.

//Comparação maior ou igual - validando se é maior ou igual a 18 anos.
const idade1=18
const idade2=16

const maiorIdade = 18

console.log('Sou maior de idade? Tenho', idade1, 'anos. É maior de idade?', idade1 >= maiorIdade )
console.log('Sou maior de idade? Tenho', idade2, 'anos. É maior de idade?', idade2 >= maiorIdade )

//Comparação Estrita

const compararacaoEstrita = idade1 === maiorIdade
console.log('São estritamente iguais? ', compararacaoEstrita)

//Comparação Diferente

const comparacaoDiferente = idade1 !== maiorIdade
console.log('São diferentes? ', comparacaoDiferente)
