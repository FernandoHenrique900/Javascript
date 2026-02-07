//Exemplo de função com setTimeout

function saudacao (){   
    console.log('Life long and prosper!')
}

setTimeout(saudacao, 1000) //1000ms = 1s

let contador = 0

const id = setInterval(() => {  //setInterval executa a função a cada determinado intervalo de tempo
    contador++
    console.log('Tempo decorrido:',contador, 'segundos') //imprime o contador a cada segundo
    if (contador == 10) {
        clearInterval(id) //clearInterval usado para parar a execução do setInterval
    }
}, 1000)