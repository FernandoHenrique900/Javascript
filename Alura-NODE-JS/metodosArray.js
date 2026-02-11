/*METODOS DE ARRAY - Otimos para estudo/teoria*/ 

/*FILTER*/
/*
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
*/

const numero = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numero.filter(numero => numero % 2 == 0) //arrow function
const numerosImpares = numero.filter(numero => numero % 2 != 0) //array function 
console.log('Todos os números:' , numero)
console.log(`Números pares: ${numerosPares}`)
console.log(`Números impares: ${numerosImpares}`)

/*MAP*/
/*
O método map() cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array.
*/
const numerosDobrados = numero.map(numero => numero * 2) //arrow function
console.log(`Números dobrados: ${numerosDobrados}`)