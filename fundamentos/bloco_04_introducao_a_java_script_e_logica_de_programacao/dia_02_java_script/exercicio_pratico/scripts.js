let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}


let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numeros.length; index += 1) {
    soma += numeros[index];
}
console.log(soma);


let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < num.length; index += 1) {
    resultado += num[index];
}
let media = resultado / num.length;
console.log(media);


let outroNumero = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let outroResultado = 0;
for (let index = 0; index < outroNumero.length; index += 1) {
    resultado += outroNumero[index];
}
let outraMedia = outroResultado / outroNumero.length;
console.log(outraMedia);
if (outraMedia > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}


let dados = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = dados[0];
for (let index = 1; index < dados.length; index += 1) {
    if (dados[index] > maiorValor) {
        maiorValor = dados[index];
    }
}
console.log(maiorValor);


let valores = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] % 2 !== 0) {
        result =+ 1;
    }
}
if (result === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(result);
}


let sequencia = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = sequencia[0];
for (let index = 1; index < sequencia.length; index += 1) {
    if (sequencia[index] < menorValor) {
        menorValor = sequencia[index];
    }
}
console.log(menorValor)


let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);


let novaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
for (let index = 0; index < novaArray.length; index += 1) {
    console.log(novaArray[index] / 2);
}