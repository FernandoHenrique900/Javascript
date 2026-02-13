//Exemplos de objetos - Manipulando Objetos

const pessoa = {
    nome:'Ana',
    idade:42,
    temCNH: true
}

pessoa.sobrenome = 'Julia'

// console.log('Nome:', pessoa.nome)
// console.log('Sobreome:', pessoa.sobrenome)

const livro={
    titulo:'It-A Coisa',
    autor: 'Stephen King',
    paginas: 1200
}

livro.publicado = true
livro.idiomas = ['Ingles', 'Portugues', 'Espanhol'] /* Adiciona os idiomas Ingles, Portugues e Espanhol ao array idiomas do objeto livro */

console.log('Livro antes:', livro)

livro.idiomas.push('Mandarim','Frances') /* Adiciona os idiomas Mandarim e Frances ao array idiomas do objeto livro */
delete livro.paginas  /* Remove a propriedade paginas do objeto livro */

console.log('Livro antes:', livro)

console.log('Autor do livro:', livro['autor']) /* Acessa a propriedade autor de jeito literal */
console.log('Autor do livro:', livro.autor) /* Acessa a propriedade autor do objeto livro */

/*livro.autor: Use 95% do tempo. É o padrão do Clean Code.

livro['autor']: Use quando o nome da chave estiver dentro de uma variável ou quando a chave tiver espaços/hifens.*/

console.log('Editora:', livro ['editora']) /* Acessa a propriedade editora do objeto livro, como não existe, retorna undefined */

const autor={
    nome:'Stephen',
    sobrenome:'King',
    idade:65,
    nacionalidade:'Americana'
}
console.log('Autor:', autor)

/*
Exemplo de acesso a propriedade de um objeto via notação de colchetes:

const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  paginas: 310
};

const propriedade = "autor";
console.log(livro[propriedade]); // Imprime: J.R.R. Tolkien */