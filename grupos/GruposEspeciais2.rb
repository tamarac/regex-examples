texto = 'supermecado superação hiperMERCADO'

puts texto.scan(/(?:super)[\wÁ-ú]+/i).join(' ')

# Positive lookbehind
# alguma coisa que tenhar 'mercado' porem tenha super antes
puts texto.scan(/(?<=super)[\wÁ-ú]+/i).join(' ')
# Negative lookbehind

# alguma coisa que tenhar 'mercado' porem não tenha super anterior
puts texto.scan(/(?<!super)mercado/i).join(' ')