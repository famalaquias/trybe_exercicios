let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  
  console.log('Bem-vinda, ' + info.personagem);
  console.log('Bem-vinda, ' + info['personagem']);

  console.log(info.recorrente);
  console.log(info['recorrente']);
  console.log(info);

  for (let key in info) {
      console.log(key);
  }

  for (let key in info) {
      console.log(info[key]);
  }




let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}




let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + leitor.livrosFavoritos[0].titulo + '');
  

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos.push(
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
  );

  
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    }
);
  console.log(leitor.nome + ' tem ' + ' ' + leitor.livrosFavoritos.length + 'livros favoritos');