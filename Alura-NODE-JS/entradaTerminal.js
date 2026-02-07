const readline = require('readline') //importando o módulo readline, usada para ler a entrada do terminal

const leitor = readline.createInterface({ //criando uma interface de leitura e escrita no terminal
    input: process.stdin, //process.stdin é o fluxo de entrada padrão do terminal
    output: process.stdout //process.stdout é o fluxo de saída padrão do terminal
})

leitor.question('Qual é o seu nome? ', (nome) => { //question é usada para fazer uma pergunta ao usuário e obter a resposta
    console.log(`Olá, ${nome}!`) //imprimindo a resposta do usuário
    leitor.question('Qual é a sua idade? ', (idade) => { //arrow function usada para tratar a resposta do usuário, já aprendido!
        if (idade >= 18) {
            console.log('Você é maior de idade.')
        } else {
            console.log('Você é menor de idade.')
        }
        leitor.close()
    })
})