/* Estudo de Arrays*/

const frutas =  ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango']
//usa=0
//morango=4

// console.log(frutas)

// console.log('Primeira fruta: ', frutas[0])
// console.log('Ulimna fruta: ', frutas[4])

// console.log('Total de frutas: ', frutas.length)

// console.log ('Total de frutas', frutas.length)

// frutas.push('Melancia')

// console.log ('Total de frutas após a adição:', frutas.length)

// console.log('Ultima fruta: ', frutas[frutas.length -1])

/*FUNÇÃO SPLICE */
//frutas.splice (2, 1) //remove 1 item a partir do indice 2
//console.log('Depois de remover', frutas)

/*FUNÇÃO FOR*/

for (let i = 0; i < frutas.length; i++) { //percorre o array
    console.log('Indice:', i) //imprime o indice
    console.log(frutas[i]) //imprime o item do indice
}

/*FUNÇÃO FOREACH */
console.log ('Usando forEach:')

frutas.forEach((valor, indice) =>{ //percorre o array, usando arrow function
    console.log('Indice: ', indice, valor)
})

/*USANDO FOR OF*/
console.log('Usando for of:')
for (const fruta of frutas) { //percorre o array, usando for of
    console.log(`Fruta da vez ${fruta}`)
}

/*
ANOTAÇÕES

O mais antigo: for tradicional
O for tradicional é o mais antigo de todos. Ele existe desde as primeiras versões do JavaScript.


for (let i = 0; i < frutas.length; i++) { 

console.log(frutas[i]); 

} 

Depois veio o forEach
O forEach surgiu como uma forma mais amigável e direta de percorrer arrays. 
Ele é um método específico dos arrays, ou seja, só funciona se você estiver lidando com um array mesmo.


frutas.forEach(fruta => { 

console.log(fruta); 

}); 
OBS:Você não precisa se preocupar com o índice nem com o tamanho do array. 
É só dizer o que quer fazer com cada item.

Mais recentemente: for/of
O for/of foi adicionado à linguagem para ser ainda mais simples e direto do que o for tradicional,
e mais flexível do que o forEach, pois pode funcionar com outros tipos de dados além de arrays 
(mas a gente vai chegar lá depois).


for (let fruta of frutas) { 

console.log(fruta); 

} 
OBS:Ele é ótimo para quando você só quer acessar os valores, um por um, sem se preocupar com índices.

Resumo da evolução:
-for** tradicional** → o mais antigo e mais detalhado

-forEach → método moderno e direto para arrays

-for/of → sintaxe simples e elegante, ideal para percorrer valores
*/