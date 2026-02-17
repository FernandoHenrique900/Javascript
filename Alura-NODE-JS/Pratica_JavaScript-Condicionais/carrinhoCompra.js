/*Imagine que você está desenvolvendo um site de compras.
A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada.
Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!".
Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."*/

const carrinhoVazio=false

switch(true){
    case true: // Não passe booleano como string!! REMEMBER
        console.log(`Carrinho vázio! Impossível realizar venda.`);
        break;
    case falsex:
        console.log(`Carrinho Ocupado! Realizar venda.`);
        break;
}