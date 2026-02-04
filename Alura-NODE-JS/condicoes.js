/*const numero=0
const indefinido = undefined
const nulo = null
const textoVazio = ''
obs: Vai ser convertido p/ truth ou falsy
*/

const nome = 'Davi'
if (nome){
    console.log('Olá ',nome)
}else{
    console.log('Ainda não sei o seu nome!')
}

const idade = 19

if (idade !=null &&idade>=18){
    console.log ('Maior de idade')
}else if (idade!=null && idade >=0 && idade<18){
    console.log ('Menor de idade')
}else{
    console.log ('Idade inválida')
}

//outro jeito de fazer
idade1=13   

if (idade1 !=null){
    if (idade>=18){
        console.log ('Maior de idade')
    }else if (idade1 >=0 && idade<18){
        console.log ('Menor de idade')
    }else{
        console.log ('Idade inválida')
    }
}