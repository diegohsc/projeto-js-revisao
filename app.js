const livros = require('./database')
    //console.log(livros)

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um Livro? S/N')

//se for sim, mostra as categorias disponível e pergunta qual categoria o usuário escolhe.
//se não, mostra todos os livros em ordem crescente por número de páginas.

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Tecnologia', 'Programação', 'Dinheiro', 'Crescimento pessoal')

    const entregaCategoria = readline.question('Qual categoria voce escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entregaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Essas são todas os livros disponiveis')
    console.table(livrosOrdenados)
}