/*1. Lista de nomes
Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.*/

const nomes = ['Fernando', 'João', 'Maria', 'Pedro', 'Ana']
 
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

/*2. Adicionar e remover itens
Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). 
Mostre o array antes e depois.*/

const frutas = ['Maçã', 'Banana', 'Laranja', 'Pera', 'Manga']

console.log('Array antes da adição:', frutas)

frutas.push('Melancia') //adiciona a melancia ao final do array

console.log('Array depois da adição:', frutas)

frutas.shift() //remove a primeira fruta do array

console.log('Array depois da remoção:', frutas)

/*3. Contar itens do array
Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.*/

const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre']
for (const cidade of cidades) {
    console.log(cidade)
}
console.log('Quantidade total de cidades:', cidades.length)

/*4. Somar todos os números
Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log('Soma total:', soma)

/*5. Média de notas
Crie um array com 4 notas. 
some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.*/

const notas=[5,7,8,5]
let total = 0
for(let i=0; i < notas.length; i++){ //erro clássico usar '<=' --CUIDADO--
    console.log(notas[i])
    total += notas[i]
}
console.log('Total:',total, 'A média é', (total/notas.length))
if (total/notas.length >=7){
    console.log('Aprovado')
}else{
    console.log('Sua média foi de ',(total/notas.length), '. Você está reprovado!')
}

/*6. Mensagens personalizadas com forEach
Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.*/

const listaNomes = ['Will','Andrew','Stephanie','Jennipher','Lawrence','Larusso'];
listaNomes.forEach ((nome)=>{
    console.log ('Olá,',nome);
});

/*7. Descontos com map
Crie um array com preços de produtos. 
Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.*/

const valores=[10,15,20,32,7]
valores.forEach((valor)=>{ //SE ATENTAR MAIS A SINTAXE -- ESTUDAR MAIS!!!
    console.log('Valar antes do desconto=', valor, 'Valor pós desconto de 10%=', (valor*0.9))
})

/*8. Filtrar valores altos
Crie um array com idades. 
Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.*/

const idades =[19,21,32,17,18,23,32,15,42]
idades.forEach((idade)=>{
    if(idade>=18){
    console.log(`Idade: ${idade}, é de maior`)
    }
    else{
        console.log(`Idade: ${idade}, é de menor`)
    }
})

const deMaior = idades.filter(idades => idades>=18) //numero => numero % 2 == 0)
console.log(`Acima de 18 anos = ${idades}`) 

/*9. Simulando carrinho de compras
Crie um array com os preços de produtos em um carrinho de compras.
Utilize um laço for ou for...of para calcular o valor total da compra.

Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console. */

let valorCarrinho =[19,22,1999,350,195,145]
let tot = 0
for(const valor of valorCarrinho){
    console.log(valor)
    tot += valor 
}
console.log(`Valor da compra: R$ ${tot}`)
console.log(`Valor da compra com desconto de 20%: R$ ${tot*0.8}`)

/*10. Lista de tarefas
Crie dois arrays:

-um array com nomes de tarefas
-outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
Exiba a lista de tarefas pendentes no console.*/

let tarefas=['plotar','nadar','criar','pagar','varrer','correr','cozinhar']
let concluida=[false,true,false,false,true,false,true]

let tarefasPendentes = tarefas.filter(function(tarefa, index){  //ESTUDAR MAIS O FUNCIONAMENTO DO METODO FILTER
    return concluida[index] ===  false;
});
console.log('Tarefas pendentes', tarefasPendentes)