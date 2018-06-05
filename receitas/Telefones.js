const texto = `
Lista Telefonica:
    - (21) 12345-5241
    - (11) 14745-5241
    - 8547-96584
    - (85)3333-3333
    - (1) 4521-5474
    `
    // console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))

// console.log(texto.match(/(\(\d{2}\)\s)\d{4,5}-\d{4}/g))
const regexTest = RegExp(/(\(\d{2}\)\s)\d{4,5}-\d{4}/g)
console.log(regexTest.test(texto))