function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light')

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }  ctrl+; para comentar


    // pegar a tag img
    const img = document.querySelector('#profile img') //usamos o metodo queryselector que e parecido com a forma que o css seleciona os elementos

    if (html.classList.contains('light')) {
        img.setAttribute('src','../assets/avatar-filipe-dark.png')
    }else{
        img.setAttribute('src', '../assets/avatar-filipe.png')
    }
    
    //para alterar a imagem pelo javascript

}