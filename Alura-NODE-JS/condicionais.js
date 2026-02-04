//Testes de condicionais

const idade = 17

if(idade >= 18){
    console.log(idade,"é maior de idade")
} else {
    console.log(idade,"é menor de idade")
}

//entre 9 e 10: Excelente
//entre 7 e 8: Bom
//entre 4 e 6: Médio
//entre 0 e 3: Ruim

const nota = 6

if(nota >= 9 && nota <= 10){
    console.log("Excelente")
} else if(nota >= 7 && nota < 9){
    console.log("Bom")
} else if(nota >= 4 && nota < 7){
    console.log("Médio")
} else if(nota >= 0 && nota < 4){
    console.log("Ruim")
} else {
    console.log("Nota inválida")
}

//Exemplo de Operador ternário idade
const maiorDeIdade = idade >= 18 ? "ternario - maior de idade" : "ternario -menor de idade"
console.log(idade, maiorDeIdade)

//Exemplo de Operador ternário nota
notaAprovada = nota >= 9 ? console.log("Excelente"):
    nota >= 7 ? console.log("Bom"):
        nota >= 4 ? console.log("Médio"):
            console.log("Ruim")
