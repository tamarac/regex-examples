const texto = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto1 ='there is a big fog in NYC'

// * => zero ou mais
const regex = /fogo*/gi
console.log(texto.match(regex))
console.log(texto1.match(regex))
