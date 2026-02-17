//const readline = require('readline')
import {createInterface} from 'readline'
import {soma, subtracao} from './operacoesMatematicas.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro numero: \n>', (a) =>{ //aqui é a entrada do primeiro número
    leitor.question ('Digite a operação:\n+: Soma\n-: Subtração\n>', (operacao) => { //aqui é a entrada da operação
        leitor.question('Digite o segundo número:\n>', (b)=> { //aqui é a entrada do segundo número
            const num1 = Number(a)
            const num2   = Number(b)

        let resultado =null;

        if(operacao == '+'){
            resultado = soma(num1, num2)
               
        }else if (operacao == '-'){
                resultado = subtracao(num1, num2)
        }else {
            console.log('Operação inválida!')
        }

        if (resultado !=null){
            console.log('Resultado:', resultado)
        }
        leitor.close();

        })
    })
})       