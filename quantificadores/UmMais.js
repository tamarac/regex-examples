const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto1 ='there is a big fog in NYC'

// + => um ou mais)
const regex = /fogo+/gi
console.log(texto.match(regex))
console.log(texto1.match(regex))


const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g)) // tras um array com cada item
console.log(texto3.match(/[0-9]+/g))// tras um array com um item com todos os numeros juntos.
