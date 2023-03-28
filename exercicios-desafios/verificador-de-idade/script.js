function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txt_ano = document.querySelector('#txtano')
    var res = document.getElementById('resul')
    var msg = document.getElementById('msg')

    res.innerHTML = ''

    if (txt_ano.value.length == 0 || Number(txt_ano.value) > ano || Number(txt_ano.value) < ano - 130) {
        window.alert('[ERRO] Confira os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(txt_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança-m.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criança-f.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulta-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/idosa-f.jpg')
            }
        }
        
        msg.style.textAlign = 'center'
        msg.innerText = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}