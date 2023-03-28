let valores = [5, 8, 4, 9, 3, 1]
console.log(valores)


for ( let num = 0 ; num < valores.length ; num++ ) {
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}

// Forma simplificada do for acima.

// for (let num in valores) {
//     console.log(`A posição ${num} tem o valor ${valores[num]}`)
// }