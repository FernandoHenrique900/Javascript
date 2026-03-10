/*Comand line interface (CLI) */

import fs from 'fs'; // módulo de file system do node
import trataErros from './erros/funcoesErro.js'; // importa a função trataErros do módulo funcoesErro.js
import contaPalavras from './index.js'; // importa a função contaPalavras do módulo index.js

const caminhoArquivo = process.argv; // array com os argumentos passados na linha de comando
const link = caminhoArquivo[2] // link do arquivo

fs.readFile(link,'utf-8', (erro, texto) =>{ // função de callback para ler o arquivo
    try{ // tenta executar o código dentro do bloco try
        if(erro) throw erro; // se houver um erro, lança o erro
        contaPalavras(texto);   // chama a função contaPalavras passando o texto como argumento
    }catch(erro){ // captura o erro caso ocorra
        console.log ('Erro:', trataErros(erro)); // chama a função trataErros passando o erro como argumento
    }
    })
