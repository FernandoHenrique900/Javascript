/*SPREAD E REST OPERATOR*/

let pessoa1 = {
    nome:'Sarah Connor',
    idade:42,
    profissao:'Médica'
}
const pessoa2 = { ...pessoa1 } // Cria uma cópia rasa do objeto pessoa1

pessoa2.idade = 43
pessoa2.profissao = 'Enfermeira'

console.log('Pessoa 1:', pessoa1)
console.log('Pessoa 2:', pessoa2)

pessoa1 ={
    ...pessoa2, //spread operator, funciona como um clone, copiando todas as propriedades de pessoa2 para pessoa1
    profissao:'Monitora de saúde', // Adiciona a propriedade profissao com o valor 'Monitora de saúde' ao objeto pessoa1
    temCNH: true // Adiciona a propriedade temCNH com o valor true ao objeto pessoa1
}
console.log(pessoa1)

/*REST*/

const {nome, ...rest} = pessoa1 // Rest Desestrutura o objeto pessoa1, extraindo a propriedade nome e o restante das propriedades em um objeto chamado resto
console.log(nome)
console.log(rest)