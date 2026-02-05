/*Exemplo de Laco For*/
console.log('Contador 1-10')
for (let contador = 1; contador <= 10; contador++) {
    console.log('Numero atual:',contador)
}

/*Exemplo de Laco For - Verificar se é par ou impar*/
console.log('Verificar se é par ou impar de 0-15')
for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0){
        console.log('Numero:',numero, 'é par')
    } else {
        console.log('Numero:',numero,'é impar')
    }
}

/*contar numero de caracteres de uma palavra*/
//palavra.length conta o numero de caracteres de uma string
//contador-1 é utilizado para exibir o caractere na posição do contador
const palavra = 'Ele usa TypeScript'
console.log('Contar numero de caracteres de TypeScript')

for(let contador = 0; contador<palavra.length; contador++){
    console.log('Caractere:', palavra[contador], 'na posição:', contador)
}
console.log('Numero de caracteres de', palavra, 'é:', palavra.length)

/*
O laco for of executa o bloco de código para cada elemento do array.
Nesse caso, o array é a palavra "exemplo".
O bloco de código é executado 7 vezes, uma para cada caractere da palavra.
*/


const palavra1 = "exemplo";

for (const caractere of palavra1) {
  console.log(caractere);
}

