let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado` 
        lista.appendChild(item)
        res.innerHTML = ''
    } else if (isNumero(num.value) == false) {
        window.alert('O número que você digitou é inválido.')
    } else if (isLista(num.value, valores) == false) {
        window.alert('O valor já está na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para ver o resultado.')
    } else {
        let tot = valores.length
        let min = Math.min(...valores)
        let max = Math.max(...valores)
        let soma = 0

        for (let i in valores) /* forma tradicional: (let i = 0 ; i < valores.length ; i++) */ {
            soma += valores[i]
        }

        let media = soma / valores.length

        res.innerHTML = `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${min}</p>`
        res.innerHTML += `<p>O maior valor é ${max}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre todos os valores é ${media}</p>`
    }
}
