const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
// O que são retrovisores.
/*
    Retrovidor define que o que foi encontrado em 
    um grupo será repedido identico em outro lugar
    utilizando \1 que fará a busca correta.
    O numero referece ao numero do grupo, grupo 1 ,2,3,4.
    
*/
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
//(?:lenta) - faz com que não seja guardado na memoria esse grupo.
// e considera o grupo dois como 1.
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
// O que ele encontrar será substituido por mente devido ao '$2' 
// que está referenciando o grupo dois.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))