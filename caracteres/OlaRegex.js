const texto = 'Era uma Casa Muito engraçada.Porque na CASA Não tinha chão Ninguém podia Dormir na rede Porque a caSA NÃO TINHA PAREDE.'

const regex = /casa/gi
console.log(texto.match(regex))

console.log(texto.match(/a c/i))