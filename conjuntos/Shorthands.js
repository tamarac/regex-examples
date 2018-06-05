const texto = `1,2,3,4,5,6,a.b c!d?e    -
f_g`

console.log(texto.match(/\d/g)) // numeros
console.log(texto.match(/\D/g)) // não números
console.log(texto.match(/\w/g)) // caractes [a-zA-z0-9_]
console.log(texto.match(/\W/g)) // NÃO caractes [^a-zA-z0-9_]

console.log(texto.match(/\s/g)) // espaços [ \t\n\r\f] tab, espaço em branco e outra linha

console.log(texto.match(/\S/g)) // não espaços [^ \t\n\r\f] não espaço em branco,tab e outra linha