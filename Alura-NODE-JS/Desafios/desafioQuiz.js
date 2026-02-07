//DESAFIO QUIZ DE JAVASCRIPT
/* CRIE UM QUIZ DE JAVASCRIPT COM 3 PERGUNTAS E 4 OPÇÕES DE RESPOSTA CADA.
CADA PERGUNTA TEM 3 POSSÍVEIS RESPOSTAS CORRETAS.
APÓS AS 3 PERGUNTAS, O USUÁRIO DEVE RECEBER UMA MENSAGEM COM O NÚMERO DE ACERTOS.
SE O USUÁRIO ACERTAR TODAS AS PERGUNTAS, O USUÁRIO DEVE RECEBER UMA MENSAGEM DE PARABÉNS.
SE O USUÁRIO ACERTAR MENOS DE 3 PERGUNTAS, O USUÁRIO DEVE RECEBER UMA MENSAGEM DE FELIZ INICIO.
SE O USUÁRIO NÃO ACERTAR NENHUMA PERGUNTA, O USUÁRIO DEVE RECEBER UMA MENSAGEM DE ZERO. */

const readline = require('readline') 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo ao Quiz de JavaScript!');
console.log('Responda as perguntas abaixo com as letras a, b, c ou d. \n');

let acertos = 0;

rl.question('1. Qual é a palavra usamos para criar uma função em JavaScript?\n (A) define \n (B) function \n (C) create \n ', (resposta1) => { //abertura da pergunta 1
    if (resposta1 === 'B' || resposta1 === 'b') {
        acertos++;
        console.log('Resposta correta!');
    } else {
        console.log('Resposta incorreta.');
    }


    rl.question('2. Qual dessas é uma estrutura de repetição?\n (A) loopar \n (B) repeat \n (C) for \n ', (resposta2) => { //abertura da pergunta 2
        if (resposta2 === 'C' || resposta2 === 'c') {
        acertos++;
        console.log('Resposta correta!');
        } else {
        console.log('Resposta incorreta.');
        }

        rl.question('3. Qual é o valor considerado falsy em JavaScript?\n (A) 1 \n (B) 0 \n (C) "texto" \n ', (resposta3) => { //abertura da pergunta 3
            if (resposta3 === 'B' || resposta3 === 'b') {
                acertos++;
                console.log('Resposta correta!');
            } else {
                console.log('Resposta incorreta.');
            }
        

if (acertos === 3) {
    console.log('Parabéns! Você arrebentou! Acertou todas as perguntas.');
} else if (acertos === 2) {
    console.log(`Você acertou ${acertos} de 3 perguntas.`);
} else if (acertos === 1) {
    console.log(`Você acertou ${acertos} de 3 perguntas.`);
} else {
    console.log('Infelizmente você zerou o quiz.');
}
rl.close(); 
        });    //fechamento da pergunta 3
    });     //fechamento da pergunta 2
});     //fechamento da pergunta 1