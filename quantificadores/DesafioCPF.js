const texto = `CPF dos aprovados:
  - 600.567.890-12
  - 765.998.345-23
  - 432.688.828-89
  - 542.568.44100`
console.log(texto.match(/(\d{3}\.)+\d{3}-?\d{2}/g))