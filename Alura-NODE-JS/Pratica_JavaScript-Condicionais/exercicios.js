//IF/ELSE   

//definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 5;
const operacao = '--';

if (operacao==='soma'){
    console.log(`Soma de  ${num1} e ${num2} é igual a ${num1+num2}`)
}else if(operacao==='multiplicacao'){
    console.log(`Multiplicação de  ${num1} e ${num2} é igual a ${num1*num2}`)
}else{
    console.log(`Operação inválida`)
}

//Localizar nível de bonus de acordo com faixa salarrial
//ex:$11000 e acima: 3% de bônus
//ex:$10999 a 7000:  5% de bônus
//ex:$6999 a 4000:   7% de bônus
//ex:$3999 p abaixo: 9% de bônus

const salario = 1000;

if (salario>=11000){
    console.log(`Seu salario atual de ${salario},  receberá 3% de bônus e irá para ${salario*1.03}`)
}else if(salario<=10999 && salario>=7000){
    console.log(`Seu salario atual de ${salario}, receberá 5% de bônus e irá para ${salario*1.05}`)
}else if(salario<=6999 && salario>=4000){
    console.log(`Seu salario atual de ${salario}, receberá 7% de bônus e irá para ${salario*1.07}`)
}else if(salario<3999){
    console.log(`Seu salario atual de ${salario}, receberá 9% de bônus e irá para ${salario*1.09}`)
}else{
    console.log (`Salario:${salario}, inválido! Digite o valor correto!`)
}


//AUTO ESCOLA
//SE A IDADE FOR MAIOR DE 18, O que acontece?
//O NUMERO 19 também é maior que 17  🤔

const idade=16;

if(idade >=18){
    console.log(`Pode dirigir`);
}else if(idade >=17){
    console.log(`Pode procurar a autoescola`);
}else{
    console.log(`Abaixo da idade mínima`);
}
//CUIDADE COM O ALINHAMENTO DE CONDICIONAIS 

//OPERADOR 'OR' = ||

const idadeAposenta=58;
const contribuicoes=162;

if (idadeAposenta>=60 || contribuicoes>=180){
    console.log(`Aposentadoria habilitada`);
}else{
    console.log (`Não é possivel aposentar ainda.`)
}

//VERIFICAR SE ANO É BISSEXTO
//Deve ser divisivel por 4, mas não por 100.
//ou
//Deve ser divisivel por 100 e por 400.

const ano = 1992;

if (((ano%4 === 0) && (ano%100 !== 0))|| (ano%400 ===0)){
    console.log(`Ano ${ano} é bissexto`);
}else{
    console.log(`Ano ${ano} não é bissexto`)
}

//OPERADOR TERNARIO
const nome='Kurt'; //caso envie vazio, entra como falsy
const saudacao= nome ?`Olá, ${nome}`:`Òlá, pessoa whatever`;
console.log(saudacao);

//SWITCH / CASE

const avaliacao = 2;

switch (avaliacao){
    case 5:
        console.log('ÓTIMA');
        break;
    case 4:
        console.log('BOA');
        break;
    case 3:
        console.log('NEUTRA');
        break;
    default:
       console.log('BAIXA');
       break;
}


//OP CONDICIONAL E SWITCH
//VERIFICAR SE ESTUDANTE RECEBERÁ BÔNUS NA NOTA
//CONDIÇÃO = NOTA 8 OU ACIMA E 2 FALTA OU MENOS

const aluno ='Chester';
const nota = 5;
const faltas = 4;

const recebeBonus = (nota >=8) && (faltas <=2) 
? `${aluno} recebe bônus` : `${aluno} não recebe bônus`;
console.log(recebeBonus);

//CRIAR FLUXO QUE IDENTIFICA USUARIO: FREE/ PREMIUm / SUPER-PREMIUM
const user = 'premium';

switch(user){
    case 'free':
        console.log('Acesso limitado');
        break;
    case 'premium':
        console.log('Acesso a todas as funções');
        break;
    case 'super-premium':
        console.log('Acesso a todas as funções + Antecipado');
        break;
}