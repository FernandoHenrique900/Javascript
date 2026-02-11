/*1. Verificação de idade para compra de bebida
Peça a idade da pessoa em uma variável. 
Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". 
Caso contrário, mostre "Venda proibida para menores de 18 anos".*/

idade= 13

if (idade >=18){
    console.log('Altorizado a venda de alcool!')
}else{
    console.log('Venda proibida para menores de 18 anos!')
}

/*2. Saudação de acordo com a hora
Crie uma variável horaAtual. Se estiver entre 6 e 12, 
mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".*/

horaAgora=17
if(horaAgora >=6 && horaAgora <12){
    console.log('Bom dia')
}else if (horaAgora >=12 && horaAgora <18){
    console.log('Boa tarde')
}else if(horaAgora >=18 && horaAgora <24){
    console.log('Boa noite')
}else if(horaAgora >=0 && horaAgora <6){
    console.log('Madrugada')
}

/*3. Verificação de número positivo ou negativo
Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.*/

numero=-134

if (numero >0){
    console.log('O número é positivo')
}else if (numero <0){
    console.log('O número é negativo')
}else{
    console.log('O número é igual a zero')
}

/*4. Conversão de nota em conceito
Crie uma variável nota entre 0 e 10. 
Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).*/

nota= -3

if (nota >=9 && nota <=10){
    console.log('Nota - A')
}else if (nota >=8 && nota <9){
    console.log('Nota - B')
}else if (nota >=6 && nota <8){
    console.log('Nota - C')
}else if (nota >=4 && nota <6){
    console.log('Nota - D')
}else if (nota >=0 && nota <4){
    console.log('Nota - E')
}else{
    console.log('Nota inválida')
}

/*5. Número par ou ímpar com ternário
Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.*/

numero=-2

const parOuImpar = numero % 2 === 0 ? 'Par' : 'Ímpar' //usando operador ternário
console.log(parOuImpar)

/*6. Menu com switch-case
Crie uma variável opcao com valores de 1 a 3. 
Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".*/

opcao= 3

switch (opcao) {
    case 1:
        console.log('Cadastrar')
        break;
    case 2:
        console.log('Listar')
        break;
    case 3:
        console.log('Sair')
        break;
    default:
        console.log('Opção inválida')
        break;
}

/*7. Validação de campo obrigatório
Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". 
Caso contrário, mostre "E-mail válido".*/

    email= ''

    if (email === ''){
        console.log('Preencha o campo de e-mail:------@',email)
    }else{
        console.log('E-mail válido:',email)
    }

/*8. Validação de senha segura
Crie duas variáveis:

senha

senhaValida (valor true ou false, definido manualmente)

Se senhaValida for verdadeira, mostre "Senha válida".
Caso contrário, mostre "Senha muito curta".*/

senha='012345'
senhaValida= true

if (senhaValida){
    console.log('Senha válida')
}else{
    console.log('Senha muito curta')
}

/*9. Compra com saldo
Crie duas variáveis: saldoDisponivel e valorCompra. 
Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".*/

saldoDisponivel= 2000
valorCompra= 1500

if (saldoDisponivel >= valorCompra){
    console.log('Compra aprovada. Saldo restante: R$',(saldoDisponivel-valorCompra).toFixed(2))
}else{
    console.log('Saldo insuficiente. Falta R$',(valorCompra-saldoDisponivel).toFixed(2))
}

/*10. Validação de formulário completo

Crie três variáveis:

nome
email
idade
Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

📌 Observação:
Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.*/

nome= 'Leo'
email= 'leo@gmail.com'
idade= 23

formularioValido= false

if (formularioValido){
    console.log('Formulário enviado com sucesso')
}else{
    console.log('Por favor, preencha todos os campos corretamente')
}