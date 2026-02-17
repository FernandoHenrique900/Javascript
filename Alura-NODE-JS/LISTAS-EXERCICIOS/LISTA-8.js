/*1. Destructuring em objetos
Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.*/

const pessoa ={
    nome:'Ellen Ripley',
    idade:30,
    email:'ellen.ripley@example.com'
}

const {nome, idade, email} = pessoa //desestruturando o objeto pessoa em 3 partes: nome, idade e email

console.log('Objeto pessoa desestruturado:', nome, idade, email) //exibindo as 3 partes do objeto pessoa

/*2. Destructuring em arrays
Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.*/

const linguagens = ['JavaScript', 'Python', 'Java']

const [ling1, ling2, ling3] = linguagens //desestruturando o array linguagens em 3 partes: ling1, ling2 e ling3

console.log('Linguagens de programação:', ling1, ling2, ling3) //exibindo as 3 partes do array linguagens

/*3. Rest operator em função
Crie uma função que receba vários números como parâmetros usando o operador rest (...).
Utilize um laço for para somar todos os valores recebidos e retorne o total.*/

function soma(...numeros){ //função soma que recebe vários números como parâmetros usando o operador rest (...).
    let total = 0
    for(let i=0; i<numeros.length; i++){ //laço for para somar todos os valores recebidos e retorne o total.
        total += numeros[i]
    }
    return total
}

console.log('Soma:', soma(1, 2, 3, 4, 5)) //exibindo a soma dos números 1, 2, 3, 4 e 5

/*4. Spread operator com arrays
Crie dois arrays de frutas e combine-os usando o operador spread. */

const frutas1 = ['Maçã', 'Banana', 'Laranja']
const frutas2 = ['Pera', 'Mamão', 'Abacaxi']

const frutasComb = [...frutas1, ...frutas2] //combinando os arrays frutas1 e frutas2 usando o operador spread

console.log('Frutas combinadas:', frutasComb) //exibindo o array frutasComb

/*5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.*/

const pessoa1 = {
    nome:'Sarah Connor',
    idade:19
}

const pessoa2 = {
    email:'sarah.connor@example.com',
    profissao:'Garçonete'
}

const pessoaComb = {...pessoa1, ...pessoa2} //combinando os objetos pessoa1 e pessoa2 usando o operador spread

console.log('Objeto pessoa combinado:', pessoaComb) //exibindo o objeto pessoaComb

/*6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.*/

function saudacao(nome='visitante'){ //função saudacao que recebe um parâmetro nome com valor padrão 'visitante'
    console.log('Olá,', nome) //exibindo a saudação com o nome fornecido ou 'visitante' se nenhum nome for fornecido
}

saudacao('Sarah Connor') //chamando a função saudacao com o nome 'Sarah Connor'
saudacao() //chamando a função saudacao sem fornecer um nome, então o valor padrão 'visitante' será usado

/*7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano formatados.*/

const dataAtual = new Date() //criando uma variável com a data atual

const dia = dataAtual.getDate() //obtendo o dia do mês da data atual
const mes = dataAtual.getMonth() + 1 //obtendo o mês da data atual (adicionando 1, pois os meses são indexados de 0 a 11)
const ano = dataAtual.getFullYear() //obtendo o ano da data atual

console.log('Data atual formatada:', dia, '/', mes, '/', ano) //exibindo a data atual formatada como dia/mês/ano

/*9. Objeto com função construtora
Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
Em seguida, crie dois objetos Livro usando essa função.*/

function Livro(titulo, autor){ //função construtora Livro que recebe titulo e autor como parâmetros e os armazena em propriedades do objeto.
    this.titulo = titulo //armazenando o parâmetro titulo na propriedade titulo do objeto
    this.autor = autor //armazenando o parâmetro autor na propriedade autor do objeto
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien') //criando um objeto livro1 usando a função construtora Livro
const livro2 = new Livro('1984', 'George Orwell') //criando um objeto livro2 usando a função construtora Livro

console.log('Livro 1:', livro1) //exibindo o objeto livro1
console.log('Livro 2:', livro2) //exibindo o objeto livro2

/*10. Método no objeto
Adicione à função construtora Livro uma função chamada descrever, 
que retorna uma frase com o título e o autor do livro, usando concatenação de strings.*/

function descrever(){ //função descrever que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
    return 'O livro "' + this.titulo + '" foi escrito por ' + this.autor + '.' //retornando a frase com o título e o autor do livro
}

console.log('Descrição do livro 1:', livro1.descrever()) //exibindo a descrição do livro1
console.log('Descrição do livro 2:', livro2.descrever()) //exibindo a descrição do livro2
