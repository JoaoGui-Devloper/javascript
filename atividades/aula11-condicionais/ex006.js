
//-------------------------------------------Condições aninhadas--------------------------------------------------------

var atual = new Date()
var hora = atual.getHours()

if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora < 18) {
    console.log ('Boa tarde!')
} else {
    console.log ('Boa noite!')
}