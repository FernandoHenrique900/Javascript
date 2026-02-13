const carros = ['Fiat','Ford','Honda','Hyundai','Toyota','Volkswagen']

const maisCarros = ['Audi', 'BMW', 'Chevrolet', 'Chrysler', 'Subaru', 'Volvo']

const cloneCarros = [...carros]

const todosCarros = [...carros, ...maisCarros]

carros.push('WTF')

console.log('Carros:', carros)
console.log('Mais carros:', maisCarros)
console.log('Clone dos carros:', cloneCarros)
console.log('Todos os carros:', todosCarros)

const [primeira, segunda, ...restante] = todosCarros //spread e rest operator, desestruturando o array todosCarros em 3 partes: primeira, segunda e o restante

console.log('Primeira:', primeira)
console.log('Segunda:', segunda)
console.log('Restante:', restante)
