const pessoa={
    nome:'John Connor',
    idade:41,
    pets:['T-800'],
    nacionalidade:'Americana'
}

/*OPERADOR FOR IN*/

for(const chave in pessoa){ // for in é para percorrer as chaves de um objeto e não de um array
    console.log(chave) // Imprime somente as chaves do objeto pessoa: nome, idade, pets, nacionalidade
    console.log(pessoa[chave]) // Imprime o valor de cada chave do objeto pessoa: John Connor, 41, T-800, Americana
}
//pegar todas a chaves
const chaves = Object.keys(pessoa) //pegar todas as chaves do objeto pessoa
const valores = Object.values(pessoa) //pegar todos os valores do objeto pessoa
const entradas = Object.entries(pessoa) //pegar todas as entradas do objeto pessoa

console.log(chaves) // Imprime as chaves do objeto pessoa: ['nome', 'idade', 'pets', 'nacionalidade']
console.log(valores) // Imprime os valores do objeto pessoa: ['John Connor', 41, ['T-800'], 'Americana']
console.log('Entradas (chave/valor):', entradas) // Imprime as entradas do objeto pessoa: [['nome', 'John Connor'], ['idade', 41], ['pets', ['T-800']], ['nacionalidade', 'Americana']]