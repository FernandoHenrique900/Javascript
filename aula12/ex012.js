var agora = new Date() //FUNCAO PEGAR DATA
var hora = agora.getHours() //FUNCAO FILHA PEGA HORA ATUAL DO PC
console.log(`Agora são exatamente ${hora}hs.`)
if(hora >=6 && hora <=12){
    console.log('Bom Dia!')
}
else if(hora >=12 && hora<=18){
    console.log('Boa Tarde!')
}
else if(hora>=19 && hora<=24){
    console.log('Boa Noite!')
}
else{
    console.log('Madrugou!')
}
