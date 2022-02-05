let fatorial= 10;
for (let index = 10; index > 0; index -=1){
    fatorial *= index;
}
console.log(fatorial);


let palavra = 'luna';
let palavraInvertida = '';
for (let index = 0; index < palavra.length; index += 1) {
    palavraInvertida += palavra[palavra.length - 1 - index]
}
console.log(palavraInvertida);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);


let maiorNumeroPrimo = 0;
for (let index = 0; index <= 50; index += 1) {
    let éPrimo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
        if (index % divisor === 0) {
            éPrimo = false;
        }
    }
    if (éPrimo) {
        maiorNumeroPrimo = index;
    }
}
console.log(maiorNumeroPrimo);