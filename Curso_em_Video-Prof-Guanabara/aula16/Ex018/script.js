let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') //tomar cuidado é "tipo#id"
let res = document.querySelector('div#res')
let valores = [] //vetor usado para análisar dados

function isNumero(n){
    //verifica se é um número entre 1 - 100
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else{
        return false    
    }
}

function inlista(n, l){
    //verifica se o número já consta na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        //só adicionar se for número e se já não estiver na lista
    valores.push(Number(num.value))
    //adicionando item option dentrod o select
    let item = document.createElement('option')
    item.text = `Valor ${num.value} \u{1F449} add.`
    lista.appendChild(item)
    res.innerHTML = ''
    }
    else{
        alert('valor inválido ou já encontrado na lista!')
    }
    //limpa o campo pra não ter q ficar apagando
    num.value = ''
    num.focus()
}

function finalizar(){
    //verificar se o vetor tá vázio
    if(valores.length == 0){
        //verificar se o vetor tá vázio
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        let tot = valores.length //pega a quantidade de itens no vetor
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        //test de maior e menor e soma  media
        for (pos in valores){
            soma +=valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p>O maior valor ínformado foi ${maior}.</p>`
        res.innerHTML +=`<p>O menor valor ínformado foi ${menor}.</p>`
        res.innerHTML +=`<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML +=`<p> A média de todos os valores é ${media}.</p>`
    }
}