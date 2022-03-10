// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const person = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_');
// toLowerCase():  retorna o valor da string que foi chamada convertido para minúsculo.
// split():  divide uma String em uma lista ordenada de substrings.
// join():  junta todos os elementos de um array em uma string e retorna esta string.
    // console.log(email);
    const dados = {
        nomeCompleto: nome,
        email: `${email}@trybe.com`,
    };
    return dados;
}
// console.log(person('Fabiane Malaquias'));


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(person));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const sorteio = (number, callback) => {
    const numeroSorteado = Math.floor(Math.random() * (5 - 1 + 1)) + 1; //logica para calcular numero de 1 a 5.
    return callback(number, numeroSorteado);
}
// console.log(sorteio(5, 7));

const resultadoSorteio = (numero1, numero2) => { 
    if (numero1 === numero2) {
        return 'Parabéns, você ganhou!'
    } else {
        return 'Tente novamente...'
    }
}
console.log(sorteio(3, resultadoSorteio));


//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contadorDePontos = (gabarito, respostaEstudante, callback) => {
    let contador = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        let contagem = callback(gabarito[index], respostaEstudante[index]);
        contador += contagem;
    }
    return contador;
}

const totalRespostasCorretas = (resposta1, resposta2) => {
    if (resposta1 === resposta2) {
        return 1;
    } else if (resposta2 === 'N.A') {
        return 0;                
    } else {
        return -0.5;
    }
}
console.log(contadorDePontos(gabarito, respostaEstudante, totalRespostasCorretas));