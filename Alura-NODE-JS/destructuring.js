/*DESTRUTURNG ARRAYS E OBJETOS*/

const pessoa = {
    nome:'Ellen Ripley',
    idade:30,
    profissao: 'Subtenente'
}

console.log('Objeto pessoa:', pessoa.nome,','+ pessoa.idade+' anos,', pessoa.profissao) //exibindo as propriedades do objeto pessoa

const {nome, idade, profissao} = pessoa //desestruturando o objeto pessoa em 3 partes: nome, idade e profissao

console.log('Objeto pessoa desestruturado:', nome, idade, profissao) //exibindo as 3 partes do objeto pessoa
//vantagem: facilitar a leitura e manipulação de objetos e arrays, tornando o código mais conciso e legível

function saudacao(pessoa){
    console.log('Salve, ', pessoa.nome) //exibindo a propriedade nome do objeto pessoa desestruturado
}

saudacao(pessoa)


const frutas=['Maçã', 'Banana', 'Laranja', 'Pera', 'Mamão']

const [primeira, segunda] = frutas

console.log('Primeira fruta:', primeira)
console.log('Segunda fruta:', segunda)
