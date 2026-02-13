/*1. Criando um objeto pessoal
Crie um objeto com seu nome, idade e profissão.*/

humano={
    nome:'Lawrence',
    idade:58,
    profissao:'Sensei-Karate'
}

/*2. Acessando propriedades
Acesse e exiba o valor da propriedade "nome" no console.*/
console.log('Nome',humano.nome)

/*3. Atualizando valores
Modifique a propriedade "idade" com um novo valor.*/

humano.idade=59
console.log('Idade atualizada',humano.idade)
console.log(humano)

/*4. Adicionando uma nova propriedade
Adicione ao objeto uma nova propriedade chamada "cidade".*/

humano.cidade='Los Angeles'

console.log(humano)

/*5. Função com objeto
Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.*/

function exibirDadosPessoa(pessoa){ //função exibirDadosPessoa que recebe um objeto pessoa como parâmetro
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao} em ${pessoa.cidade}`
}

console.log(exibirDadosPessoa(humano))

/*6. Lista de pessoas
Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.*/

const pessoas=[
    {nome:'Johnny',idade:21},
    {nome:'Ana',idade:17},
    {nome:'João',idade:23}
]

console.log(pessoas)

/*7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.*/

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18) //filtrando as pessoas com idade maior ou igual a 18

console.log('Maiores de idade:', maioresDeIdade)

/*8. Objeto com método
Crie um objeto chamado usuario com as propriedades nome e saudacao.
A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa,
utilizando o nome armazenado no objeto por acesso direto à propriedade.*/

const usuario={nome:'Raphael',saudacao:function(){ 
    console.log('Olá, eu sou '+usuario.nome); 
}} // Loucura, uma função simples declarada dentro do objeto que se auto-chama
usuario.saudacao();

/*9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício.*/

for (let chave in humano){ //percorrendo as propriedades do objeto humano
    console.log(`${chave}: ${humano[chave]}`) //imprimindo a chave e o valor de cada propriedade do objeto humano
}

/*10. Cálculo de compra
Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade). */

const produto={preco:100,quantidade:5} //criando um objeto produto com preco e quantidade
const valorTotal=produto.preco*produto.quantidade //calculando o valor total da compra(preco * quantidade)
console.log('Valor total da compra:',valorTotal)