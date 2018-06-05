// . é um coringa, válido para uma posição. 
//Ele substitui qualquer caracter, apenas 1.

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'
console.log(texto.match(/8../g))
console.log(texto.match(/.\../g))