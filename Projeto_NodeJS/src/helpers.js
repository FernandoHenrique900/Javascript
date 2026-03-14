function filtraOcorrencias(paragrafo){ // função que filtra as palavras duplicadas em um parágrafo
    return Object.keys(paragrafo).filter(chave => paragrafo[chave]>1) // filtra as palavras duplicadas em um parágrafo
}

function montaSaidaArquivo(listaPalavras){// função que monta a saída do arquivo com as palavras duplicadas encontradas em cada parágrafo
    let textoFinal='';
    listaPalavras.forEach((paragrafo, indice)=>{
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal +=`palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
    })
    return textoFinal;
}

export{montaSaidaArquivo};