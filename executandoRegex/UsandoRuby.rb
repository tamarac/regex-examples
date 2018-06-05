texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

regexNove = Regexp::new('9')
puts regexNove.match(texto)

regexNove = %r{9}
puts regexNove.match(texto)

puts regexNove =~ '894'

regexLetras = /[a-f]/

# procura todas as ocorrencias, join junta todos os itens em uma linha.
puts texto.scan(regexLetras).join()

# muda as ocorrencias para o item informado.
puts texto.split(/,/).join()

print texto.split(/[aeiou]/)