/*Usando this dentro de objetos*/


let pessoa = { 

nome: 'Maria', 

idade: 28, 

apresentar: function() { 

console.log('Olá, meu nome é ' + this.nome); 

} 

}; 


pessoa.apresentar(); // Resultado: Olá, meu nome é Maria 

/*No exemplo acima, a função apresentar está dentro do objeto pessoa. 
Quando chamamos pessoa.apresentar(), o this se refere ao próprio objeto pessoa, permitindo acessar this.nome e retornar "Maria"

Por que não usamos o nome do objeto diretamente?
Você poderia pensar: “Por que não usar pessoa.nome dentro da função?”

Boa pergunta! Porque ao usar this.nome, o método se torna reutilizável, mesmo que o nome do objeto mude. Veja:*/


let outraPessoa = { 

nome: 'João', 

apresentar: pessoa.apresentar 

}; 

outraPessoa.apresentar(); // Resultado: Olá, meu nome é João 

/*O cuidado com Arrow Functions
Arrow Functions não têm seu próprio this. Por isso, elas não são recomendadas como métodos dentro de objetos quando você precisa acessar propriedades usando this.

Veja o que acontece se você usar uma Arrow Function: */


let pessoa1 = { 

nome: 'Ana', 

apresentar: () => { 

console.log('Olá, meu nome é ' + this.nome); 

} 

}; 

pessoa1.apresentar(); // Resultado: Olá, meu nome é undefined 

/*Resumo prático
Dentro de métodos em objetos, use funções tradicionais para garantir que this funcione corretamente.

O this aponta para o objeto que chamou o método.

Evite Arrow Functions quando precisar acessar propriedades do próprio objeto via this.*/