const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .
// Variável nameBook que receberá o valor do menor nome;
function smallerName() {
    let nameBook;
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }      
    });
    return nameBook;
}
console.log(smallerName(books));

// Explicação:
//A variável nameBook começa vazia, mas é necessário colocar dentro dela o que a função me pede. Uma variável vazia, do ponto de vista lógico, representa o valor false (falso). Logo, a negação de uma variável vazia representaria o valor true (verdadeiro). 
// Desse modo, faremos da seguinte maneira:
// se a negação de nameBook estiver vazia OU quando encontrar um nome de livro com caracterer menor, guardo o nome desse livro na minha variável nameBook.