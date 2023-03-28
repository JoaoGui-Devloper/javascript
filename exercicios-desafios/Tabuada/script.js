function tabuada() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (txtn.value.length == 0) {
        window.alert('Por favor, digite um número para gerar a tabuada.')
    } else {
        let n = Number(txtn.value)
        tab.innerHTML = ''
        for ( let c = 1 ; c <= 10 ; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}