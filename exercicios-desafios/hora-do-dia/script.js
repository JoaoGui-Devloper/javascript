function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#6cc3ca'
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#dd4110'
        img.src = 'imagens/tarde.jpg'
    } else {
        document.body.style.background = '#1e222d'
        img.src = 'imagens/noite.jpg'
    }
}