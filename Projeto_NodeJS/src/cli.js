/*Comand line interface (CLI) */

import fs from 'fs'; // módulo de file system do node
import trataErros from './erros/funcoesErro.js'; // importa a função trataErros do módulo funcoesErro.js
import {contaPalavras} from './index.js'; // importa a função contaPalavras do módulo index.js
import { json } from 'stream/consumers';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv; // array com os argumentos passados na linha de comando
const link = caminhoArquivo[2] // link do arquivo
const endereco = caminhoArquivo[3] // endereço do arquivo

fs.readFile(link,'utf-8', (erro, texto) =>{ // função de callback para ler o arquivo
    try{ // tenta executar o código dentro do bloco try
        if(erro) throw erro; // se houver um erro, lança o erro
        const resultado = contaPalavras(texto);   // chama a função contaPalavras passando o texto como argumento
        criaESalvaArquivo(resultado, endereco); // chama a função criaESalvaArquivo passando o resultado e o endereco como argumento
    }catch(erro){ // captura o erro caso ocorra
        trataErros(erro); // chama a função trataErros passando o erro como argumento
    }
    })

// função assíncrona para criar e salvar o arquivo
// async function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras); // converte o array de palavras em uma string JSON
//     try{
//     await fs.promises.writeFile(arquivoNovo, textoPalavras) // escreve o conteúdo do arquivo
//         console.log('arquivo criado');
//         }catch(erro){
//             throw erro;
//         }
//     }


function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    //const textoPalavras = JSON.stringify(listaPalavras); // converte o array de palavras em uma string JSON
    const textoPalavras = montaSaidaArquivo(listaPalavras); // chama a função montaSaidaArquivo passando o array de palavras como argumento
    
    fs.promises.writeFile(arquivoNovo, textoPalavras) // escreve o conteúdo do arquivo
        .then(() =>{ // then é executado quando a promessa é resolvida
            console.log('Arquivo criado')
        })
        .catch((erro) => {  // catch é executado quando a promessa é rejeitada
            throw erro
        })
        .finally(() => console.log('Operação finalizada'))// finally é executado independentemente de a promessa ser resolvida ou rejeitada
    }
