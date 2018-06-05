const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
//retorna verdadeiro caso encontre ocorrencias e falso caso contrario.
console.log(regexNove.test(texto))
// executa a regex.
console.log(regexNove.exec(texto))


const regexLetras = /[a-f]/g
console.log('Métodos da string....')

// retorna as ocorrencias 
console.log(texto.match(regexLetras)) 

// retorna a posição do primeiro elemento que foi encontrado a partir da regex passada
console.log(texto.search(regexLetras)) 

//substitui os itens correspondentes pela string informada.
console.log(texto.replace(regexLetras),'Achei')

// gerar um array com os itens encontrados pela regex
console.log(texto.split(regexLetras))