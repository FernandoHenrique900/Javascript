//Exemplo de Switch Case

//entre 9 e 10: Excelente
//entre 7 e 8: Bom
//entre 4 e 6: Médio
//entre 0 e 3: Ruim

const nota = 7

switch(nota){
    case 10:
    case 9:
        console.log("Excelente")
        break
    case 8:
    case 7:
        console.log("Bom")
        break
    case 6:
    case 5:
    case 4:
        console.log("Mediano")
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Ruim")
        break
    default:
        console.log("Nota inválida")
        break
}