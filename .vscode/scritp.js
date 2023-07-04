function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

//pegar a tag im
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')) {
    //se tiver light mode, add a img light

   img.setAttribute('src', './assets/avatar-light.png')
} else {
//se tiver se light mode, manter a img normal 
   img.setAttribute('src', './assets/avatar.png')   
}



}