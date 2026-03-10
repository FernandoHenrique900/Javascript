
export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto); // chama a função extraiParagrafos passando o texto como argumento
        const contagem = paragrafos.flatMap((paragrafo) => {// flatMap() - retorna um novo array com todos os elementos de sub-array concatenados em ordem
        if(!paragrafo) return[];
        return verificaDuplicadas(paragrafo);
    })
        console.log(contagem);}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n'); // quebra o texto em parágrafos, convertendo para minúsculas
}

/*Instruções:
1 - Criar uma função que quebre o texto em parágrafos
2 - Criar uma função que verifique palavras duplicadas em cada parágrafo
3 - Imprimir no console o parágrafo e as palavras duplicadas encontradas


criar um array de palavras
contar as ocorrencias
montar um objeto c/ 
*/



/*  .filter((paragrafo)=>paragrafo)
    .map((paragrafo) =>{ // filtra os parágrafos vazios e mapeia os parágrafos restantes
        return verificaDuplicadas(paragrafo); // retorna o objeto com as palavras duplicadas encontradas no parágrafo
     })
    OBS: flatMap é mais performatico do que usar 2 métodos separados (filter e map)
    [1,2[3,4]]
    [1,2,3,4]*/

//função de expressão regular p/ substituir caracteres especias "global" na aplicacão por 'nada'.
function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); //REGEX - EXPRESSÃO REGULAR - remove caracteres especiais
}


// função que verifica palavras duplicadas
function verificaDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado={};
    //objeto[propriedade] = valor; //criar uma propriedade no objeto e atribuir um valor, caso objeto já exista, atualiza o valor
    listaPalavras.forEach(palavra =>{
        if(palavra.length >=3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; //se a palavra não existir no objeto, cria e atribui 0, caso contrário, soma 1
        }
    }) 
    return resultado;
}

