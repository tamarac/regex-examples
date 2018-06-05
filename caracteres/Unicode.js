// no inicio ...
//um byte (6 bits) -256 caracteres
// simbolos, pontuação, A-Z,a-z, 0,9

//dois bytes (16 bits) - 65500+ caracteres
// +simbolos, +pontuação, A-Z,a-z, 0,9

//https://unicode-table.com/pt

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))