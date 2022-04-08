let time = 2000
currentImageIndex = 0,
images = document.querySelectorAll("#slider img"),
max = images.length;

function nextImage(){

    images[currentImageIndex].classList.remove("selected")
    //remove o status de selecionado pra não parar

    currentImageIndex++

    if(currentImageIndex >=max)
        currentImageIndex = 0
    
        images[currentImageIndex].classList.add("selected")

}

function start (){
    setInterval(() =>{
        //troca de imagem
        nextImage()
    }, time)
}
window.addEventListener("load", start)