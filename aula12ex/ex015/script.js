function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   
   if(fano.value.length == 0 || fano.value > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade =  ano - Number(fano.value)
       //res.innerHTML =`Idade calculada : ${idade}` // só pra teste
       var genero =''
    //criando tag dinamicamente pelo javascript
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

       if (fsex[0].checked){
         genero='Homem'
            if(idade >=0 && idade <10){
                //children
                img.setAttribute('src','foto-baby-m.png')
            }
            else if( idade <21){
                //young PRECISA COLOCAR AS OUTRA FOTOS EDITADAS
            }
            else if(idade <50){
                //adult PRECISA COLOCAR AS OUTRA FOTOS EDITADAS
            }
            else{
                //old PRECISA COLOCAR AS OUTRA FOTOS EDITADAS
            }
       }else if(fsex[1].checked){
           genero='Mulher'
           if(idade >=0 && idade <10){
            //children
            img.setAttribute('src','foto-baby-f.png')
            }
            else if( idade <21){
            //young PRECISA COLOCAR AS OUTRA FOTOS EDITADAS
            }
            else if(idade <50){
            //adult PRECISA COLOCAR AS OUTRA FOTOS EDITADAS
            }
            else{
            //old
            }
       }
       res.style.textAlign ='center'
       res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) //appendcchield add o elemento img no fim
   }
}