/*Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

O personagem precisa ter mais de 50 pontos.
O personagem deve ter pelo menos uma vida restante.
Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.
 */

const pontos=49
const vidasRestantes=2

if (pontos>=50 && vidasRestantes>1){
    console.log('Próximo nível!');
}else{
    console.log('Não vai subir de nível!')
}