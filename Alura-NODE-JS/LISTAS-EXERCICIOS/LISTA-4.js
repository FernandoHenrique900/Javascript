/*1. Contador de 1 a 10
Use um for para mostrar no console os números de 1 até 10, um por linha.*/

let i
for(i=1; i<=10;i++){
    console.log('-->', i)
}

/*2. Soma de 1 a 100
Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.*/

let x
let y=0

for(x=1;x<=100;x++){
    y+=x
}
console.log(y)

/*3. Tabuada personalizada
Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.*/

let n
let m=5
console.log('Tabuada de ',m)
for(n=1;n<=10;n++){
    console.log(n*m)
}

/*4. Contagem regressiva
Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".*/

let a=10
console.log('Contagem Regressiva')
do{
    console.log(a)
    a--
}while(a>=0)

/*5. Receber números até digitar 0
Simule a digitação de números usando uma variável numeroDigitado.
Use um do...while para repetir a execução até que o valor seja 0.
Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

📌 Observação:
Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.*/
let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
  // simulação manual de entrada
  if (repeticoes === 0) {
    numeroDigitado = 5;
  } else if (repeticoes === 1) {
    numeroDigitado = 10;
  } else {
    numeroDigitado = 0;
  }

  if (numeroDigitado !== 0) {
    quantidade++;
  }

  repeticoes++;
} while (numeroDigitado !== 0);

console.log("Total de números digitados: " + quantidade);

/*6. Jogo do número secreto
Crie uma variável numeroSecreto com valor fixo.
Simule até 3 tentativas usando um for.
Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

"Acertou!" se for igual
"Tente novamente" se for diferente
📌 Observação:
As tentativas devem ser simuladas por variáveis dentro do laço.*/

let numeroSecreto = 7;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;

  if (tentativa === 1) {
    numeroTentado = 3;
  } else if (tentativa === 2) {
    numeroTentado = 5;
  } else {
    numeroTentado = 7;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}
/*7. Idade ao longo dos anos
Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.*/
anoNascimento=1966
anoAtual=2026

for(let ano=anoNascimento; ano<=anoAtual; ano++){
    console.log('Em ', ano, " voce tinha", (ano - anoNascimento), "anos")
}
/*8. Listando números pares
Mostre todos os números pares entre 1 e 50 usando for.*/
console.log('Numeros pares de 1-50')
for(let v=1; v<=50; v++){
    if(v%2==0)
        {console.log(v)}
}
/*9. Contar múltiplos de 3 entre 1 e 100
Mostre no console quantos números entre 1 e 100 são divisíveis por 3.*/
console.log('Numeros multiplos de 3 - Entre 1-100')
for(let w=1; w<=100; w++){
    if(w%3==0)
        {console.log(w)}
}

/*10-Menu com repetição
Crie uma variável opcao.
Use um do...while para exibir repetidamente as opções:

1 - Ver saldo
2 - Fazer depósito
3 - Sair
O menu deve continuar sendo exibido até que a opção seja 3.
Mostre no console a ação correspondente a cada opção.

📌 Observação:
A escolha da opção deve ser simulada por valores atribuídos à variável opcao.


*/
let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);
