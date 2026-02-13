/*Exemplo de data*/

/*manipulando datas*/

const agora = new Date()

console.log (agora)

console.log('Ano:', agora.getFullYear())
console.log('Mês:', agora.getMonth() + 1) /* getMonth() retorna o mês de 0 a 11, então adicionamos 1 para obter o mês correto */
console.log('Dia:', agora.getDate())
console.log('Hora:', agora.getHours())
console.log('Minuto:', agora.getMinutes())
console.log('Segundo:', agora.getSeconds())
console.log('Milissegundo:', agora.getMilliseconds())

const nascimento = new Date('1998-05-11T07:53:32.000Z')

console.log('Nascimento:', nascimento)

console.log('Data formatada (BR):', agora.toLocaleDateString('pt-BR')) //formato brasileiro
console.log('Hora formatada (BR):', agora.toLocaleDateString('en-US')) //formato americano
